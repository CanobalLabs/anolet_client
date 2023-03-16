function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
};

module.exports = function (msg) {
    if (msg.zone != document.currentZone.id) return;
    document.getElementById("player-" + msg.id).style.top = "calc(" + msg.y.toString() + "%" + " - 150px)";
    document.getElementById("player-" + msg.id).style.left = "calc(" + msg.x.toString() + "%" + " - 150px)";
};
