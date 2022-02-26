module.exports = function(msg) {
    document.getElementById("player-" + msg.plrid).firstElementChild.src = msg.avatar;
}