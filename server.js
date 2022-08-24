require("dotenv").config()
require('newrelic');
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
    const pubsub = mqtt.connect(process.env.MQTT_URL, {
        protocolVersion: 5,
        port: 8883,
        clean: true,
        clientId: "",
        connectTimeout: 2000, // 2 seconds
        username: "PubSub",
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
       // if (!currentGames.includes(ws.game)) pubsub.subscribe(ws.game);
        currentGames.push(ws.game);

        ws.isAlive = true;
        ws.on('pong', heartbeat);

        axios.get("https://staging-api-infra.anolet.com/ACCService/" + ws.game + "/increaseVisitCount", {
            headers: {
                "serverauth": process.env.HASH
            }
        });

        // HASH has to be same on the API
        axios.get("https://staging-api-infra.anolet.com/game/" + locals.game, {
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
            axios.get("https://staging-api-infra.anolet.com/user/" + locals.user).then(async user => {


                await client.hSet('player:' + locals.game + ":" + locals.user, [
                    'avatar', user.data.defaultRender ? "https://cdn.anolet.com/avatars/anolet/internal.png" : "https://cdn.anolet.com/avatars/" + locals.user + "/internal.png",
                    'username', user.data.username,
                    'x', res.data.worldSettings.spawn.x,
                    'y', res.data.worldSettings.spawn.y,
                    'id', locals.user,
                    'admin', user.data.ranks.includes("ADMIN_TAG")
                ]);

                await client.sAdd('players:' + locals.game, locals.user);
                await client.sAdd('playersGlobal', locals.user);

                pubsub.broadcast(locals.game, JSON.stringify({
                    type: 'newplr',
                    avatar: user.data.defaultRender ? "https://cdn.anolet.com/avatars/anolet/internal.png" : "https://cdn.anolet.com/avatars/" + locals.user + "/internal.png",
                    username: user.data.username,
                    admin: user.data.ranks.includes("ADMIN_TAG"),
                    plrid: locals.user,
                    x: res.data.worldSettings.spawn.x,
                    y: res.data.worldSettings.spawn.y,
                }));
            }).catch(e => {

            });
        });

        function removeItem(arr, value) {
            var index = arr.indexOf(value);
            if (index > -1) {
              arr.splice(index, 1);
            }
            return arr;
        }

        ws.on("close", async reason => {
            log("Disconnect", locals.user, "Red");
            removeItem(currentGames, locals.game);
            await client.sRem('players:' + locals.game, locals.user);
            await client.sRem('playersGlobal', locals.user);
            await client.del('player:' + locals.game + ":" + locals.user);
            pubsub.broadcast(locals.game, JSON.stringify({
                type: "exit",
                plrid: locals.user
            }));
        });

        ws.on("message", async msg => {
            try {
                var msg = JSON.parse(msg);
                require("./messages/" + msg.type)(msg, locals, pubsub);
            } catch (e) {
                return;
            }
        });
    });

    const interval = setInterval(function ping() {
        wss.clients.forEach(async function each(ws) {
            if (ws.isAlive === false) {
                log("Hard Disconnect", locals.user, "Red");
                removeItem(currentGames, locals.game);
                await client.sRem('players:' + locals.game, locals.user);
                await client.sRem('playersGlobal', locals.user);
                await client.del('player:' + locals.game + ":" + locals.user);
                pubsub.broadcast(locals.game, JSON.stringify({
                    type: "exit",
                    plrid: locals.user
                }));
                return ws.terminate();
            }
            ws.isAlive = false;
            ws.ping();
        });
    }, 10000);

    wss.on('close', function close() {
        clearInterval(interval);
    });

    setInterval(async function () {
        if (process.env.ENVIRONMENT == "dev") return;
        axios.get("https://staging-api-infra.anolet.com/game/s").then(response => {
            if (response.status != 200) return;
            response.data.forEach(async function (game) {
                axios.get("https://staging-api-infra.anolet.com/ACCService/" + game.id + "/setPlayerCount/" + await (client.sCard("players:" + game.id)), {
                    headers: {
                        "serverauth": process.env.HASH
                    }
                });
            })
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
