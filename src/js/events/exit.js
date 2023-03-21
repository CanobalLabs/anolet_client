module.exports = function (msg) {
    if (msg.newZone == "") document.getElementById("listusr-" + msg.id).remove();
        document.getElementById("player-" + msg.id).style.opacity = "0";
        setTimeout(function () {
            document.getElementById("player-" + msg.id).remove();
        }, 500);
}