module.exports = function (msg) {
    if (msg.newZone == "") document.getElementById("listusr-" + msg.plrid).remove();
        document.getElementById("player-" + msg.plrid).style.opacity = "0";
        setTimeout(function () {
            document.getElementById("player-" + msg.plrid).remove();
        }, 500);
}