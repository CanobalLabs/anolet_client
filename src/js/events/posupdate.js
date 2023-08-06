function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
};

module.exports = function (msg) {
    document.getElementById("player-" + msg.id).style.top = "calc(" + msg.y.toString() + "%" + " - " + gameState.worldSettings.avatarScale/2 + "px)";
    document.getElementById("player-" + msg.id).style.left = "calc(" + msg.x.toString() + "%" + " - " + gameState.worldSettings.avatarScale/2 + "px)";
};
