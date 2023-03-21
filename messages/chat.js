const client = require("../database/init");

module.exports = async function (msg, locals, pubsub, ws) {
    if (msg.message.length > 150 || msg.message.length < 2) return;
    if (await client.get("timeout:" + locals.game + ":" + locals.user) != null) return;
    client.set("timeout:" + locals.game + ":" + locals.user, 0xFF, { "EX": 1 });
    pubsub.broadcast(locals.game, JSON.stringify({
        type: "chatmsg",
        id: locals.user,
        username: await client.hGet("player:" + locals.game + ":" + locals.user, ["username"]),
        admin: await client.hGet("player:" + locals.game + ":" + locals.user, ["admin"]) == "true",
        message: msg.message
    }));
}