function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
};

var detail = require("../loadDetail");
const addPlayerToList = require("../utils/addPlayerToList");

module.exports = function (msg) {

    detail("Rendering Menu")
    document.getElementById("game-name").innerText = msg.gameState.title;
    document.getElementById("game-author").innerText = msg.gameState.creator.name;
    document.getElementById("game-image").src = msg.gameState.iconAssetURL;

    detail("Initializing Speed Animation")
    var styleSheet = document.createElement("style")
    styleSheet.innerHTML = `
    .player {
        transition: top ${msg.gameState.worldSettings.defaultSpeed}s ease-out, left ${msg.gameState.worldSettings.defaultSpeed}s ease-out, opacity ${msg.gameState.worldSettings.defaultSpeed}s ease-out;
    }
    `
    document.head.appendChild(styleSheet);

    detail("Calculating Zone Settings")
    document.defaultZone = msg.gameState.zones.find(zone => zone.id == msg.gameState.worldSettings.defaultZone);
    document.currentZone = document.defaultZone;

    require("../utils/loadZone")(document.defaultZone, msg.players.filter(player => player.zone == document.defaultZone.id));
    msg.players.forEach(player => {
        addPlayerToList(player)
    })
}