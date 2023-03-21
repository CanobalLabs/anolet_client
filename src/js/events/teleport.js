module.exports = function (msg) {
    // Loading Screen
    document.getElementById("loading").style.opacity = "1"
    document.getElementById("loading").style.display = "block"

    // Unload
    document.querySelectorAll('.player, .layer').forEach(e => e.remove());

    // Load
    require("../utils/loadZone")(msg.zone, msg.players, true);
}