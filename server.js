const express = require("express");
const app = express();
const Websocket = require('ws');
const wss = new Websocket.Server({ port: 8080 });

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
    console.log(req.headers);
    if (!req.headers['user-agent']) return ws.close();
    ws.id = wss.getUUID()
    console.log('One client connected');
    ws.send(JSON.stringify({
        type: 'init',
        players: players,
        myid: ws.id
    }));
    players.push({
        id: ws.id,
        x: 0,
        y: 0,
    });
    wss.broadcast(JSON.stringify({
        type: 'newplr',
        plrid: ws.id
    }));
    ws.on("close", reason => {
        console.log(ws.id + " disconnected");
        players = players.filter(player => player.id !== ws.id);
        wss.broadcast(JSON.stringify({
            type: "exit",
            plrid: ws.id
        }));
    });
    ws.on("message", msg => {
        var msg = JSON.parse(msg);
        if (msg.type == "pos") {
            players.find(p => p.id == ws.id).x = msg.x;
            players.find(p => p.id == ws.id).y = msg.y;
            wss.broadcast(JSON.stringify({
                type: "posupdate",
                id: ws.id,
                x: msg.x,
                y: msg.y
            }));
        }
    });
});

var port = process.env.PORT || 80;
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${process.env.port}!`);
});
