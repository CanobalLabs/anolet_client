module.exports = function(msg) {
    document.getElementById("player-" + msg.id).style.top = msg.y - 230 + "px";
    document.getElementById("player-" + msg.id).style.left = msg.x - 110 + "px";
};