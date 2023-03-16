require("dotenv").config()
process.on('uncaughtException', function (err) {
    console.error(err);
    console.log("Node NOT Exiting...");
});
const express = require("express");
const app = express();
const Websocket = require('ws');
const wss = new Websocket.Server({ noServer: true });
const axios = require("axios");
const log = require("./utils/logger");
const mqtt = require("mqtt");

(async () => {


    const client = require("./database/init");
    await client.connect();
    await client.flushAll();

    var currentGames = []

    // You cannot run multiple instances of MQTT using the same authorization. You have to create seperate tokens for each instance. For now, only run one instance.
    const pubsub = mqtt.connect(process.env.MQTT_URL, {
        protocolVersion: 5,
        port: process.env.MQTT_PORT,
        clean: true,
        clientId: process.env.MQTT_AUTH_CLIENT_ID,
        connectTimeout: 2000, // 2 seconds
        username: process.env.MQTT_AUTH_CLIENT_ID,
        password: process.env.MQTT_AUTH_JWT,
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
            console.log("send init message")
            ws.send(JSON.stringify({
                type: 'init',
                players: await getAllUserData(locals.game),
                myid: locals.user,
                gameState: res.data
            }));
            axios.get(process.env.BASE_URL + "/user/" + locals.user).then(async user => {
                locals.gameData = res.data
                locals.userData = user.data
                await client.hSet('player:' + locals.game + ":" + locals.user, [
                    'avatar', user.data.defaultRender ? "https://cdn.anolet.com/avatars/anolet/internal.png" : "https://cdn.anolet.com/avatars/" + locals.user + "/internal.png",
                    'username', user.data.username,
                    'x', locals.gameData.zones.find(z => z.id == res.data.worldSettings.defaultZone).spawn.x,
                    'y', locals.gameData.zones.find(z => z.id == res.data.worldSettings.defaultZone).spawn.y,
                    'id', locals.user,
                    'admin', user.data.ranks.includes("ADMIN_TAG"),
                    'zone', res.data.worldSettings.defaultZone
                ]);
                locals.zoneData = res.data.zones.find(z => z.id == res.data.worldSettings.defaultZone);
                console.log(locals.zoneData)
                await client.sAdd('players:' + locals.game, locals.user);
                await client.sAdd('playersGlobal', locals.user);
                console.log("here 2")
                pubsub.broadcast(locals.game, JSON.stringify({
                    type: 'newplr',
                    avatar: user.data.defaultRender ? "https://cdn.anolet.com/avatars/anolet/internal.png" : "https://cdn.anolet.com/avatars/" + locals.user + "/internal.png",
                    username: user.data.username,
                    admin: user.data.ranks.includes("ADMIN_TAG"),
                    plrid: locals.user,
                    x: locals.zoneData.spawn.x,
                    y: locals.zoneData.spawn.y,
                    zone: res.data.worldSettings.defaultZone
                }));
                console.log("here 3")
            }).catch(e => {
                console.log(e)
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
