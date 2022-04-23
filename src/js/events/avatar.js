module.exports = function(msg) {
    document.getElementById("player-" + msg.plrid).firstElementChild.src = "./avatars/Avatar" + msg.avatar + ".png";
}