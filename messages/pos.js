const client = require("../database/init");
var pointInPolygon = require('point-in-polygon');
const getAllUserData = require("../database/getAllUserData");

module.exports = async function (msg, locals, pubsub, ws) {
    if (typeof msg.x != "number" || typeof msg.y != "number") return; // Prevents invalid data (and possibly RCE) from being sent

    // Check for teleporter
    locals.zoneData.teleporters.forEach(async teleporter => {
        if (pointInPolygon([msg.x, msg.y], teleporter.locationPolyline)) {
            // Teleport
            setTimeout(async function () {
                pubsub.broadcast(locals.game, JSON.stringify({
                    type: "exit",
                    plrid: locals.user,
                    oldZone: locals.zoneData.id,
                    newZone: teleporter.toZone
                }));
                locals.zoneData = locals.gameData.zones.find(zone => zone.id == teleporter.toZone)
                console.log(locals.gameData.zones, teleporter.toZone)
                ws.send(JSON.stringify({
                    type: "teleport",
                    zone: locals.zoneData,
                    players: (await getAllUserData(locals.game)).filter(player => player.zone == teleporter.toZone),
                }));
                client.hSet("player:" + locals.game + ":" + locals.user, ["zone", teleporter.toZone, "x", locals.zoneData.spawn.x, "y", locals.zoneData.spawn.y]);
                pubsub.broadcast(locals.game, JSON.stringify({
                    type: 'newplr',
                    avatar: locals.userData.defaultRender ? "https://cdn.anolet.com/avatars/anolet/internal.png" : "https://cdn.anolet.com/avatars/" + locals.user + "/internal.png",
                    username: locals.userData.username,
                    admin: locals.userData.ranks.includes("ADMIN_TAG"),
                    plrid: locals.user,
                    x: locals.zoneData.spawn.x,
                    y: locals.zoneData.spawn.y,
                    zone: teleporter.toZone,
                    existed: true
                }));
            }, locals.gameData.worldSettings.defaultSpeed * 1000);
            return;
        }
    });

    client.hSet("player:" + locals.game + ":" + locals.user, ["x", msg.x, "y", msg.y]);
    pubsub.broadcast(locals.game, JSON.stringify({
        type: "posupdate",
        id: locals.user,
        x: msg.x,
        y: msg.y,
        zone: await client.hGet("player:" + locals.game + ":" + locals.user, "zone")
    }));
}