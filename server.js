const express = require("express");
const app = express();
const http = require("http")
const Websocket = require('ws');
const chalk = require("chalk")
const wss = new Websocket.Server({ noServer: true });
var avatars = ["/Avatar1.png", "/Avatar2.png", "/Avatar3.png", "/Avatar4.png", "/Avatar5.png", "/Avatar6.png", "/Avatar7.png", "/Avatar8.png", "/Avatar9.png", "/Avatar10.png", "/Avatar11.png", "/Avatar12.png"];

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

var players = [];

wss.on('connection', (ws, req) => {
    if (!req.headers['user-agent']) return ws.close();
    ws.id = wss.getUUID();
    var randav = avatars.random();
    console.log(chalk.black.bgGreen(" Connection ") + " " + ws.id);
    ws.send(JSON.stringify({
        type: 'init',
        players: players,
        myid: ws.id
    }));
    players.push({
        id: ws.id,
        avatar: "./avatars" + randav,
        username: "",
        x: 0,
        y: 0,
    });
    wss.broadcast(JSON.stringify({
        type: 'newplr',
        avatar: "./avatars" + randav,
        avatar_id: randav.replace(/[^0-9]/g,''),
        username: "",
        plrid: ws.id
    }));
    ws.on("close", reason => {
        console.log(chalk.white.bgRed("Disconnect") + " " + ws.id);
        players = players.filter(player => player.id !== ws.id);
        wss.broadcast(JSON.stringify({
            type: "exit",
            plrid: ws.id
        }));
    });
    ws.on("message", msg => {
        var msg = JSON.parse(msg);
        if (msg.type == "pos") {
            if (typeof msg.x != "number" || typeof msg.y != "number") return; // Prevents invalid data (and possibly RCE) from being sent
            console.log(chalk.black.bgBlue(" Movement ") + " " + ws.id + " | X: " + players.find(p => p.id == ws.id).x + " -> " + msg.x + " | Y: " + players.find(p => p.id == ws.id).y + " -> " + msg.y);
            players.find(p => p.id == ws.id).x = msg.x;
            players.find(p => p.id == ws.id).y = msg.y;
            wss.broadcast(JSON.stringify({
                type: "posupdate",
                id: ws.id,
                x: msg.x,
                y: msg.y
            }));
        } else if (msg.type == "setavatar") {
            if (msg.avatar > avatars.length) return;
            console.log(chalk.black.bgYellow(" Avatar Change ") + " " + ws.id + " | " + players.find(p => p.id == ws.id).avatar + " -> " + "./avatars" + avatars[msg.avatar]);
            players.find(p => p.id == ws.id).avatar = "/avatars" + avatars[msg.avatar - 1];
            wss.broadcast(JSON.stringify({
                type: "avatar",
                plrid: ws.id,
                avatar: "/avatars" + avatars[msg.avatar - 1]
            }));
        } else if (msg.type == "setname") {
            if (msg.username.length > 20 || msg.username.length < 3) return;
            if (players.find(p => p.id == ws.id).username != "") return;
            console.log(chalk.black.bgCyan(" Name Change ") + " " + ws.id + " | " + players.find(p => p.id == ws.id).username + " -> " + msg.username);
            players.find(p => p.id == ws.id).username = msg.username;
            wss.broadcast(JSON.stringify({
                type: "name",
                plrid: ws.id,
                username: msg.username
            }));
        } else if (msg.type == "chat") {
            if (msg.message.length > 50 || msg.message.length < 3) return;
            console.log(chalk.black.bgBlueBright(" Chat ") + " " + ws.id + " | " + msg.message);
            wss.broadcast(JSON.stringify({
                type: "chatmsg",
                plrid: ws.id,
                username: players.find(p => p.id == ws.id).username,
                message: msg.message
            }));
        }
    });
});


app.use(express.static('public'));


var port = process.env.PORT || 80;
const server = app.listen(port);
server.on('upgrade', (request, socket, head) => {
    if (request.url == "/ws") {
        wss.handleUpgrade(request, socket, head, socket => {
            wss.emit('connection', socket, request);
        });
    }
});
