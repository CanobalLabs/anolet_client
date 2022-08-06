require("dotenv").config()
require('newrelic');
const express = require("express");
const app = express();
const Websocket = require('ws');
const wss = new Websocket.Server({ noServer: true });
const axios = require("axios");
const log = require("./utils/logger");

(async () => {

    const client = require("./database/init");
    await client.connect();
    await client.flushAll();

    const getAllUserData = require("./database/getAllUserData");

    function heartbeat() {
        this.isAlive = true;
    }

    wss.on('connection', async (ws, req, locals) => {
        ws.game = locals.game
        log("Connection", locals.user, "Green");

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
                    'admin', locals.user.ranks.includes("ADMIN_TAG")
                ]);

                await client.sAdd('players:' + locals.game, locals.user);
                await client.sAdd('playersGlobal', locals.user);

                wss.broadcast(locals.game, JSON.stringify({
                    type: 'newplr',
                    avatar: user.data.defaultRender ? "https://cdn.anolet.com/avatars/anolet/internal.png" : "https://cdn.anolet.com/avatars/" + locals.user + "/internal.png",
                    username: user.data.username,
                    admin: locals.user.ranks.includes("ADMIN_TAG"),
                    plrid: locals.user,
                    x: res.data.worldSettings.spawn.x,
                    y: res.data.worldSettings.spawn.y,
                }));
            }).catch(e => {

            });
        });


        ws.on("close", async reason => {
            log("Disconnect", locals.user, "Red");

            await client.sRem('players:' + locals.game, locals.user);
            await client.sRem('playersGlobal', locals.user);
            await client.del('player:' + locals.game + ":" + locals.user);
            wss.broadcast(locals.game, JSON.stringify({
                type: "exit",
                plrid: locals.user
            }));
        });

        ws.on("message", async msg => {
            try {
                var msg = JSON.parse(msg);
                require("./messages/" + msg.type)(msg, locals, wss);
            } catch (e) {
                return;
            }
        });
    });

    const interval = setInterval(function ping() {
        wss.clients.forEach(async function each(ws) {
            if (ws.isAlive === false) {
                log("Hard Disconnect", locals.user, "Red");
                await client.sRem('players:' + locals.game, locals.user);
                await client.sRem('playersGlobal', locals.user);
                await client.del('player:' + locals.game + ":" + locals.user);
                wss.broadcast(locals.game, JSON.stringify({
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
        axios.get("https://staging-api-infra.anolet.com/game/s").then(response => {
            response.data.forEach(async function (game) {
                axios.get("https://staging-api-infra.anolet.com/ACCService/" + game.id + "/setPlayerCount/" + await (client.sCard("players:" + game.id)), {
                    headers: {
                        "serverauth": process.env.HASH
                    }
                });
            })
        });
    }, 2000);

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
