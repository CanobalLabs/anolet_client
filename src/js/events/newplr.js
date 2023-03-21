const addPlayerToList = require("../utils/addPlayerToList");
const spawnPlayer = require("../utils/spawnPlayer");

module.exports = function (msg, id) {
    if (msg.zone == document.currentZone.id) {
        spawnPlayer(msg)
    }
    if (!msg.existed) addPlayerToList(msg)

    if (msg.existed && msg.id == id) {
        document.getElementById("loading").style.opacity = "0"
        setTimeout(function () {
            document.getElementById("loading").style.display = "none"
        }, 800);
    }
}
