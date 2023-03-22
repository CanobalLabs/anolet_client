require("dotenv").config()
process.on('uncaughtException', function (err) {
    console.error(err);
});
const express = require("express");
const app = express();
const Websocket = require('ws');
const wss = new Websocket.Server({ noServer: true });
const axios = require("axios");
const log = require("./utils/logger");
const mqtt = require("mqtt");

(async () => {

    function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

    const client = require("./database/init");
    await client.connect();
    await client.flushAll();

    var currentGames = []
    var PSKey = process.env.MQTT_TYPE == "cloudflare" ? await axios.get("https://api.cloudflare.com/client/v4/accounts/9d14fe5ef4b07f0c3154897d96581d60/pubsub/namespaces/" + process.env.MQTT_NAMESPACE + "/brokers/" + process.env.MQTT_BROKER + "/credentials?number=1&type=TOKEN", { headers: {"Authorization": "Bearer " + process.env.CF_TOKEN} }) : null;

        const pubsub = process.env.MQTT_TYPE == "cloudflare" ? mqtt.connect("mqtts://" + process.env.MQTT_BROKER + "." + process.env.MQTT_NAMESPACE + ".cloudflarepubsub.com", {
            protocolVersion: 5,
            port: process.env.MQTT_CF_PORT,
            clean: true,
            connectTimeout: 2000, // 2 seconds
            clientId: Object.keys(PSKey.data.result)[0],
            username: Object.keys(PSKey.data.result)[0],
            password: Object.values(PSKey.data.result)[0],
        }) : mqtt.connect(process.env.MQTT_URL, {
            protocolVersion: 5,
            port: process.env.MQTT_PORT,
            clean: true,
            connectTimeout: 2000, // 2 seconds
            clientId: makeid(20),
            username: process.env.MQTT_USERNAME,
            password: process.env.MQTT_PASSWORD,
        });
        
        pubsub.on("error", function (err) {
            console.error(err);
        });

        pubsub.on("connect", function () {
            console.log("PubSub Ready");
        });
    

    const getAllUserData = require("./database/getAllUserData");

    function heartbeat() {
        this.isAlive = true;
    }

    wss.on('connection', async (ws, req, locals) => {
        ws.game = locals.game
        log("Connection", locals.user, "Green");
        if (!currentGames.includes(ws.game)) pubsub.subscribe(ws.game);
        currentGames.push(ws.game);


        ws.isAlive = true;
        ws.on('pong', heartbeat);

        if (process.env.ENVIRONMENT != "dev") axios.patch(process.env.BASE_URL + "/ACCService/" + ws.game + "/increaseVisitCount", null, {
            headers: {
                "serverauth": process.env.HASH
            }
        });

        // HASH has to be same on the API
        axios.get(process.env.BASE_URL + "/game/" + locals.game, {
            headers: {
                "serverauth": process.env.HASH
            }
        }).then(async res => {
            ws.send(JSON.stringify({
                type: 'init',
                players: await getAllUserData(locals.game),
                myid: locals.user,
                gameState: res.data
            }));
            if (await client.sIsMember('playersGlobal', locals.user)) {
                // If the user is already in a game, remove them from that game first
                require("./utils/deleteUser")(locals.game, locals.user, currentGames, pubsub, client);
            }

            axios.get(process.env.BASE_URL + "/user/" + locals.user).then(async user => {
                locals.gameData = res.data
                locals.userData = { "username": user.username, "ranks": user.ranks }
                await client.hSet('player:' + locals.game + ":" + locals.user, [
                    'username', user.data.username,
                    'x', locals.gameData.zones.find(z => z.id == res.data.worldSettings.defaultZone).spawn.x,
                    'y', locals.gameData.zones.find(z => z.id == res.data.worldSettings.defaultZone).spawn.y,
                    'admin', user.data.ranks.includes("ADMIN_TAG"),
                    'zone', res.data.worldSettings.defaultZone
                ]);
                locals.zoneData = res.data.zones.find(z => z.id == res.data.worldSettings.defaultZone);
                await client.sAdd('players:' + locals.game, locals.user);
                await client.sAdd('playersGlobal', locals.user);
                pubsub.broadcast(locals.game, JSON.stringify({
                    type: 'newplr',
                    id: locals.user,
                    username: user.data.username,
                    admin: user.data.ranks.includes("ADMIN_TAG"),
                    x: locals.zoneData.spawn.x,
                    y: locals.zoneData.spawn.y,
                    zone: res.data.worldSettings.defaultZone,
                    existed: false
                }));
            }).catch(e => {
                console.error(e)
            });
        });

        ws.on("close", async reason => {
            log("Disconnect", locals.user, "Red");
            require("./utils/deleteUser")(locals.game, locals.user, currentGames, pubsub, client);
        });

        ws.on("message", async msg => {
            try {
                var msg = JSON.parse(msg);
                require("./messages/" + msg.type)(msg, locals, pubsub, ws);
            } catch (e) {
                return;
            }
        });
    });

    const interval = setInterval(function ping() {
        wss.clients.forEach(async function each(ws) {
            if (ws.isAlive === false) {
                log("Hard Disconnect", locals.user, "Red");
                require("./utils/deleteUser")(locals.game, locals.user, currentGames, pubsub, client);
                return ws.terminate();
            }
            ws.isAlive = false;
            ws.ping();
        });
    }, 10000);

    wss.on('close', function close() {
        clearInterval(interval);
    });

    if (process.env.ENVIRONMENT != "dev") setInterval(async function () {
        currentGames.forEach(async function (game) {
            axios.patch(process.env.BASE_URL + "/ACCService/" + game + "/setPlayerCount/" + await (client.sCard("players:" + game)), null, {
                headers: {
                    "serverauth": process.env.HASH
                }
            });
        });
    }, 2000);

    pubsub.broadcast = function broadcast(gameid, data) {
        pubsub.publish(gameid, data);
    };

    // Start waiting for messages
    pubsub.on("message", async function (topic, message) {
        wss.broadcast(topic, message.toString());
    });

    var port = process.env.PORT || 80;
    const server = app.listen(port);
    require('./server/upgrade')(server, wss, client);
})();



wss.broadcast = function broadcast(gameid, data) {
    wss.clients.forEach(function each(client) {
        if (client.readyState === Websocket.OPEN && client?.game == gameid) {
            client.send(data);
        }
    });
};

app.use(express.static('public'));
