module.exports = function (msg) {
    document.getElementById("player-" + msg.plrid).children[1].innerText = msg.username;
}