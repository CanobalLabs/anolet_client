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
                pubsub.broadcast(ws.game, JSON.stringify({
                    type: "exit",
                    id: ws.user,
                    oldZone: ws.zone,
                    newZone: teleporter.toZone
                }));
                ws.zone = teleporter.toZone
                pubsub.subscribe(ws.game + "/" + ws.zone)
                console.log(ws.zone)
                ws.send(JSON.stringify({
                    type: "teleport",
                    zone: ws.gameData.zones.find(z => z.id == ws.zone),
                    players: (await getAllUserData(ws.game)).filter(player => player.zone == teleporter.toZone),
                }));
                client.hSet("player:" + ws.game + ":" + ws.user, ["zone", teleporter.toZone, "x", ws.gameData.zones.find(z => z.id == ws.zone).spawn.x, "y", ws.gameData.zones.find(z => z.id == ws.zone).spawn.y]);
                pubsub.broadcast(ws.game, JSON.stringify({
                    type: 'newplr',
                    id: ws.user,
                    username: ws.userData.username,
                    admin: ws.userData.ranks.includes("ADMIN_TAG"),
                    x: ws.gameData.zones.find(z => z.id == ws.zone).spawn.x,
                    y: ws.gameData.zones.find(z => z.id == ws.zone).spawn.y,
                    zone: teleporter.toZone,
                    existed: true
                }));
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
    }), ws.zone);
}