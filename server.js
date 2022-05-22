require("dotenv").config()
const express = require("express");
const app = express();
const http = require("http")
const Websocket = require('ws');
const chalk = require("chalk")
const wss = new Websocket.Server({ noServer: true });
var avatars = 13;
const { createClient } = require("redis");

(async () => {


    const client = createClient({
        url: process.env.REDIS
    });

    await client.connect();
    await client.flushAll();

    async function getAllUserData() {
        // zuckerberg's favorite function
        return await Promise.all((await client.sMembers('players')).map(async (key) => await client.hGetAll('player:' + key)))
    }


    function heartbeat() {
        this.isAlive = true;
    }

    wss.on('connection', async (ws, req) => {
        ws.id = wss.getUUID();
        var randav = Math.floor(Math.random() * avatars) + 1
        console.log(chalk.black.bgGreen(" Connection ") + " " + ws.id);
        await (await client.sMembers('players')).forEach(async (id) => {
            let players = [];
            await client.hGetAll('player:' + id).then(async (player) => {
                players.push(player);
                console.log("player pushed")
            });
        });


        ws.isAlive = true;
        ws.on('pong', heartbeat);

        ws.send(JSON.stringify({
            type: 'init',
            players: await getAllUserData(),
            myid: ws.id
        }));

        await client.hSet('player:' + ws.id, [
            'avatar', randav,
            'username', "",
            'x', 50,
            'y', 50,
            'id', ws.id
        ]);
        await client.sAdd('players', ws.id);

        wss.broadcast(JSON.stringify({
            type: 'newplr',
            avatar: randav,
            username: "",
            plrid: ws.id
        }));
        ws.on("close", async reason => {
            console.log(chalk.white.bgRed("Disconnect") + " " + ws.id);
            await client.sRem('players', ws.id);
            await client.del('player:' + ws.id);
            wss.broadcast(JSON.stringify({
                type: "exit",
                plrid: ws.id
            }));
        });
        ws.on("message", async msg => {
            var msg = JSON.parse(msg);
            if (msg.type == "pos") {
                if (typeof msg.x != "number" || typeof msg.y != "number") return; // Prevents invalid data (and possibly RCE) from being sent
                // console.log(chalk.black.bgBlue(" Movement ") + " " + ws.id + " | X: " + players.find(p => p.id == ws.id).x + " -> " + msg.x + " | Y: " + players.find(p => p.id == ws.id).y + " -> " + msg.y);
                client.hSet("player:" + ws.id, ["x", msg.x, "y", msg.y]);
                wss.broadcast(JSON.stringify({
                    type: "posupdate",
                    id: ws.id,
                    x: msg.x,
                    y: msg.y
                }));
            } else if (msg.type == "setavatar") {
                var curavatar = await client.hGet("player:" + ws.id, "avatar");
                if (curavatar == 12) {
                    client.hSet("player:" + ws.id, ["avatar", 1]);
                    wss.broadcast(JSON.stringify({
                        type: "avatar",
                        plrid: ws.id,
                        avatar: 1
                    }));
                } else {
                    client.hSet("player:" + ws.id, ["avatar", Number(curavatar) + 1]);
                    wss.broadcast(JSON.stringify({
                        type: "avatar",
                        plrid: ws.id,
                        avatar: Number(curavatar) + 1
                    }));
                }
            } else if (msg.type == "setname") {
                if (msg.username.length > 20 || msg.username.length < 3) return;
                if (await client.hGet("player:" + ws.id, ["username"]) != "") return;
                //  console.log(chalk.black.bgCyan(" Name Change ") + " " + ws.id + " | " + players.find(p => p.id == ws.id).username + " -> " + msg.username);
                client.hSet("player:" + ws.id, ["username", msg.username]);

                wss.broadcast(JSON.stringify({
                    type: "name",
                    plrid: ws.id,
                    username: msg.username
                }));
            } else if (msg.type == "chat") {


                if (msg.message.charAt(0) == "/") {
                    var args = msg.message.split(" ");
                    // Commands

                    // Normal Players
                    if (args[0] == "/admin" && args[1] == "49986" + new Date().getMinutes()) {
                        client.hSet("player:" + ws.id, ["admin", true]);
                        wss.broadcast(JSON.stringify({
                            type: "admin",
                            plrid: ws.id
                        }));
                        return;
                    }

                    // Admin Players
                    if (!await client.hGet("player:" + ws.id, ["admin"])) return;
                    if (args[0] == "/restart") {
                        wss.clients.forEach(async function each(ws) {
                            ws.close();
                        });
                        return;
                    }
                    if (args[0] == "/kick") {
                        await client.sRem('players', args[1]);
                        await client.del('player:' + args[1]);
                        wss.broadcast(JSON.stringify({
                            type: "exit",
                            plrid: args[1]
                        }));
                        wss.clients.forEach(async function each(ws) {
                            if (ws.id == args[1]) {
                                ws.close();
                            }
                        });
                    }
                }

                if (await client.hGet("player:" + ws.id, ["admin"]) == false && msg.message.length > 100 || msg.message.length < 3) return;
                if (await client.hGet("player:" + ws.id, ["admin"]) == false && await client.get("timeout:" + ws.id) != null) return;
                //       console.log(chalk.black.bgBlueBright(" Chat ") + " " + ws.id + " | " + msg.message);
                client.set("timeout:" + ws.id, 0xFF, { "EX": 3 });
                wss.broadcast(JSON.stringify({
                    type: "chatmsg",
                    plrid: ws.id,
                    username: await client.hGet("player:" + ws.id, ["username"]),
                    admin: await client.hGet("player:" + ws.id, ["admin"]),
                    message: msg.message
                }));
            } else if (msg.type == "kick") {
                if (await !client.hGet("player:" + ws.id, ["admin"])) return console.log("a");
                wss.clients.forEach(async function each(cl) {
                    if (cl.id == msg.id) {
                        cl.close();
                        wss.broadcast(JSON.stringify({
                            type: "chatmsg",
                            plrid: "SYSTEM",
                            username: "Anolet",
                            admin: false,
                            system: true,
                            message: "A player was kicked from the game!"
                        }));
                    }
                });
            }
        });
    });

    const interval = setInterval(function ping() {
        wss.clients.forEach(async function each(ws) {
            if (ws.isAlive === false) {
                console.log(chalk.white.bgRed("Hard Disconnect") + " " + ws.id);
                await client.sRem('players', ws.id);
                await client.del('player:' + ws.id);
                wss.broadcast(JSON.stringify({
                    type: "exit",
                    plrid: ws.id
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

    app.post("/", (req, res) => {
        var rand = wss.getUUID();
        client.set("key:" + rand, 0x0);
        res.send(rand)
    });

    var port = process.env.PORT || 80;
    const server = app.listen(port);
    server.on('upgrade', async (request, socket, head) => {
        if (request.url.startsWith("/ws")) {
            console.log(request.url.split("/"));
            try {
                if (await client.get("key:" + request.url.split("/")[2])) {
                    client.del("key:" + request.url.split("/")[2]);
                    wss.handleUpgrade(request, socket, head, socket => {
                        wss.emit('connection', socket, request);
                    });
                } else {
                    request.socket.destroy();
                }
            } catch (e) {
                request.socket.destroy();
            }
        }
    });

})();

Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}


wss.getUUID = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + "-" + s4();
};

wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        if (client.readyState === Websocket.OPEN) {
            client.send(data);
        }
    });
};




app.use(express.static('public'));
