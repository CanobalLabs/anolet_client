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
    var PSKey = process.env.MQTT_TYPE == "cloudflare" ? await axios.get("https://api.cloudflare.com/client/v4/accounts/9d14fe5ef4b07f0c3154897d96581d60/pubsub/namespaces/" + process.env.MQTT_NAMESPACE + "/brokers/" + process.env.MQTT_BROKER + "/credentials?number=1&type=TOKEN", { headers: { "Authorization": "Bearer " + process.env.CF_TOKEN } }) : null;

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
        ws.user = locals.user
        log("Connection", ws.user, "Green");
        if (!currentGames.includes(ws.game)) pubsub.subscribe(ws.game + "/all");
        currentGames.push(ws.game);

        ws.isAlive = true;
        ws.on('pong', heartbeat);

        if (process.env.ENVIRONMENT != "dev") axios.patch(process.env.BASE_URL + "/ACCService/" + ws.game + "/increaseVisitCount", null, {
            headers: {
                "serverauth": process.env.HASH
            }
        });

        let game = await client.get("game:" + ws.game)
        if (game == null) {
            await axios.get(process.env.BASE_URL + "/game/" + ws.game, { headers: { "serverauth": process.env.HASH } }).then(async res => {
                game = res.data
                client.set("game:" + ws.game, JSON.stringify(res.data));
            });
        } else game = JSON.parse(game);
        ws.gameData = game

        if (await client.sIsMember('playersGlobal', ws.user)) {
            // If the user is already in a game, remove them from that game first
            require("./utils/deleteUser")(ws.game, ws.user, currentGames, pubsub, client);
        }


        axios.get(process.env.BASE_URL + "/user/" + ws.user).then(async user => {
            ws.userData = { "username": user.data.username, "ranks": user.data.ranks }
            await client.hSet('player:' + ws.game + ":" + ws.user, [
                'username', user.data.username,
                'x', ws.gameData.zones.find(z => z.id == ws.gameData.worldSettings.defaultZone).spawn.x,
                'y', ws.gameData.zones.find(z => z.id == ws.gameData.worldSettings.defaultZone).spawn.y,
                'admin', user.data.ranks.includes("ADMIN_TAG"),
                'zone', ws.gameData.worldSettings.defaultZone
            ]);
            ws.zone = ws.gameData.worldSettings.defaultZone

            pubsub.subscribe(ws.game + "/" + ws.zone);
            ws.send(JSON.stringify({
                type: 'init',
                players: await getAllUserData(ws.game),
                myid: ws.user,
                gameState: game
            }));
            await client.sAdd('players:' + ws.game, ws.user);
            await client.sAdd('playersGlobal', ws.user);
            pubsub.broadcast(ws.game, JSON.stringify({
                type: 'newplr',
                id: ws.user,
                username: user.data.username,
                admin: user.data.ranks.includes("ADMIN_TAG"),
                x: game.zones.find(z => z.id == ws.gameData.worldSettings.defaultZone).spawn.x,
                y: game.zones.find(z => z.id == ws.gameData.worldSettings.defaultZone).spawn.y,
                zone: ws.gameData.worldSettings.defaultZone,
                existed: false
            }));
        }).catch(e => {
            console.error(e)
        });

        ws.on("close", async reason => {
            log("Disconnect", ws.user, "Red");
            require("./utils/deleteUser")(ws.game, ws.user, currentGames, pubsub, client);
        });

        ws.on("message", async msg => {
            try {
                var msg = JSON.parse(msg);
                require("./messages/" + msg.type)(msg, pubsub, ws);
            } catch (e) {
                return;
            }
        });
    });

    const interval = setInterval(function ping() {
        wss.clients.forEach(async function each(ws) {
            if (ws.isAlive === false) {
                log("Hard Disconnect", ws.user, "Red");
                require("./utils/deleteUser")(ws.game, ws.user, currentGames, pubsub, client);
                return ws.terminate();
            }
            ws.isAlive = false;
            ws.ping();
        });
    }, 10000);

    wss.on('close', function close() {
        clearInterval(interval);
    });

    pubsub.broadcast = function broadcast(game, data, zone) {
        if (zone) {
            pubsub.publish(game + "/" + zone, data)
        } else {
            pubsub.publish(game + "/all", data);
        }
    };

    // Start waiting for messages
    pubsub.on("message", async function (topic, message) {
        wss.broadcast(topic.split("/"), message.toString());
    });

    var port = process.env.PORT || 80;
    const server = app.listen(port);
    require('./server/upgrade')(server, wss, client);
})();



wss.broadcast = function broadcast(context, data) {
    wss.clients.forEach(function each(client) {
        if (client.readyState === Websocket.OPEN && client?.game == context[0]) {
            if (context[1] == "all" || client?.zone == context[1]) return client.send(data);
        }
    });
};

app.use(express.static('public'));

var osu = require('node-os-utils')
var memUsage = 0
var cpuUsage = 0
var netInUsage = 0
var netOutUsage = 0
setInterval(async () => {
    if (!osu.isNotSupported(osu.cpu.average())) {
        if (osu.cpu.average().totalTick > cpuUsage) cpuUsage = osu.cpu.average().totalTick
    }
    if (!osu.isNotSupported(await osu.mem.used())) {
        if ((await osu.mem.used()).usedMemMb > memUsage) memUsage = (await osu.mem.used()).usedMemMb
    }
    if (!osu.isNotSupported(await osu.netstat.inOut())) {
        if ((await osu.netstat.inOut()).total.inputMb > netInUsage) netInUsage = await osu.netstat.inOut().total.inputMb
        if ((await osu.netstat.inOut()).total.outputMb > netOutUsage) netOutUsage = await osu.netstat.inOut().total.outputMb
    }
}, 1000)


process.stdin.resume();//so the program will not close instantly

function exitHandler(options, exitCode) {
    const formatMemoryUsage = (data) => `${Math.round(data / 1024 / 1024 * 100) / 100} MB`;
    console.log("Peak RAM", memUsage, "Peak CPU", cpuUsage, "%", "Peak Network In", formatMemoryUsage(netInUsage), "MB", "Peak Network Out", formatMemoryUsage(netOutUsage), "MB");
    if (options.cleanup) console.log('clean');
    if (exitCode || exitCode === 0) console.log(exitCode);
    if (options.exit) process.exit();
}

//do something when app is closing
process.on('exit', exitHandler.bind(null, { cleanup: true }));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, { exit: true }));

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, { exit: true }));
process.on('SIGUSR2', exitHandler.bind(null, { exit: true }));