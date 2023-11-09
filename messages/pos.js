const client = require("../database/init");
var pointInPolygon = require('point-in-polygon');
const getAllUserData = require("../database/getAllUserData");

module.exports = async function (msg, pubsub, ws) {
    if (typeof msg.x != "number" || typeof msg.y != "number") return; // Prevents invalid data (and possibly RCE) from being sent

    // Check for teleporter
    ws.gameData.zones.find(z => z.id == ws.zone).teleporters.forEach(async teleporter => {
        if (pointInPolygon([msg.x, msg.y], teleporter.locationPolyline)) {
            // Teleport
            setTimeout(async function () {
                await pubsub.broadcast(ws.game, JSON.stringify({
                    type: "exit",
                    id: ws.user,
                    oldZone: ws.zone,
                    newZone: teleporter.toZone
                }), ws.zone);
                ws.zone = teleporter.toZone
                await pubsub.subscribe(ws.game + "/" + ws.zone)
                ws.send(JSON.stringify({
                    type: "teleport",
                    zone: ws.gameData.zones.find(z => z.id == ws.zone),
                    players: (await getAllUserData(ws.game)).filter(player => player.zone == teleporter.toZone),
                }));
                client.hSet("player:" + ws.game + ":" + ws.user, ["zone", teleporter.toZone, "x", ws.gameData.zones.find(z => z.id == ws.zone).spawn[0], "y", ws.gameData.zones.find(z => z.id == ws.zone).spawn[1]]);
                pubsub.broadcast(ws.game, JSON.stringify({
                    type: 'newplr',
                    id: ws.user,
                    username: ws.userData.username,
                    admin: ws.userData.ranks.includes("ADMIN_TAG"),
                    x: ws.gameData.zones.find(z => z.id == ws.zone).spawn[0],
                    y: ws.gameData.zones.find(z => z.id == ws.zone).spawn[1],
                    avatar: ws.userData.avatar,
                    zone: teleporter.toZone,
                    existed: true
                }), ws.zone);
            }, ws.gameData.worldSettings.defaultSpeed * 1000);
            return;
        }
    });

    client.hSet("player:" + ws.game + ":" + ws.user, ["x", msg.x, "y", msg.y]);
    pubsub.broadcast(ws.game, JSON.stringify({
        type: "posupdate",
        id: ws.user,
        x: msg.x,
        y: msg.y,
        avatarScale: ws.gameData.worldSettings.defaultSpeed
    }), ws.zone);
}
