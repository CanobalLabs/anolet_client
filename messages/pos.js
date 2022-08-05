const client = require("../database/init");

module.exports = function (msg, locals, wss) {
    if (typeof msg.x != "number" || typeof msg.y != "number") return; // Prevents invalid data (and possibly RCE) from being sent
    client.hSet("player:" + locals.game + ":" + locals.user, ["x", msg.x, "y", msg.y]);
    wss.broadcast(locals.game, JSON.stringify({
        type: "posupdate",
        id: locals.user,
        x: msg.x,
        y: msg.y
    }));
}