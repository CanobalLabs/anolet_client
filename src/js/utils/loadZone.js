var detail = require("../loadDetail");
const spawnPlayer = require("./spawnPlayer");

module.exports = function (zone, players, teleport) {
    document.currentZone = zone;

    detail("Rendering Zone Layers")
    zone.layers.forEach(layer => {
        detail("Rendering Layer " + layer.name)
        var layerElement = document.createElement("img");
        layerElement.classList.add("layer");
        layerElement.src = layer.assetURL;
        if (layer.layer == 1) {
            layerElement.style = "z-index: 1;";
        } else {
            layerElement.style = `z-index: ${layer.layer + 1};`
        }
        detail("Adding Zone Layer")
        document.getElementById("game").appendChild(layerElement);
    });

    detail("Rendering Players")
    players.forEach(player => {
        detail("Rendering Player " + player.name)
        spawnPlayer(player)
    });
}