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

        // HASH has to be same on the API
        axios.get("https://staging-api-infra.anolet.com/game/" + locals.game, {
            headers: {
                "ServerAuth": process.env.HASH
            }
        }).then(async res => {
            ws.send(JSON.stringify({
                type: 'init',
                players: await getAllUserData(locals.game),
                myid: locals.user,
                gameState: res.data
            }));
        });

        axios.get("https://staging-api-infra.anolet.com/user/" + locals.user).then(async res => {


            await client.hSet('player:' + locals.game + ":" + locals.user, [
                'avatar', res.data.defaultRender ? "https://cdn.anolet.com/avatars/anolet/internal.png" : "https://cdn.anolet.com/avatars/" + locals.user + "/internal.png",
                'username', res.data.username,
                'x', 75.7333,
                'y', 73.92,
                'id', locals.user,
                'admin', locals.user == "anolet"
            ]);

            await client.sAdd('players:' + locals.game, locals.user);

            wss.broadcast(locals.game, JSON.stringify({
                type: 'newplr',
                avatar: res.data.defaultRender ? "https://cdn.anolet.com/avatars/anolet/internal.png" : "https://cdn.anolet.com/avatars/" + locals.user + "/internal.png",
                username: res.data.username,
                admin: locals.user == "anolet",
                plrid: locals.user
            }));
        }).catch(e => {
            
        })

        ws.on("close", async reason => {
            log("Disconnect", locals.user, "Red");

            await client.sRem('players:' + locals.game, locals.user);
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

    var port = process.env.PORT || 80;
    const server = app.listen(port);
    require('./server/upgrade')(server, wss);

})();

wss.broadcast = function broadcast(gameid, data) {
    wss.clients.forEach(function each(client) {
        if (client.readyState === Websocket.OPEN && client?.game == gameid) {
            client.send(data);
        }
    });
};

app.use(express.static('public'));
