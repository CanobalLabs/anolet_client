module.exports = function(msg) {
    document.getElementById("player-" + msg.plrid).style.opacity = "0";
    setTimeout(function(){
        document.getElementById("player-" + msg.plrid).remove();
    }, 500);
}