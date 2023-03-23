const client = require("../database/init");

module.exports = async function (msg, pubsub, ws) {
    if (msg.message.length > 150 || msg.message.length < 2) return;
    if (await client.get("timeout:" + ws.game + ":" + ws.user) != null) return;
    client.set("timeout:" + ws.game + ":" + ws.user, 0xFF, { "EX": 1 });
    pubsub.broadcast(ws.game, JSON.stringify({
        type: "chatmsg",
        id: ws.user,
        username: await client.hGet("player:" + ws.game + ":" + ws.user, ["username"]),
        admin: await client.hGet("player:" + ws.game + ":" + ws.user, ["admin"]) == "true",
        message: msg.message
    }));
}