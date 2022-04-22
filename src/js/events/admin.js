module.exports = function(msg) {
    document.getElementById("player-" + msg.plrid).children[1].innerHTML = "<div class='red' style='display: contents;'>[ADMIN] </div>" + document.getElementById("player-" + msg.plrid).children[1].innerText;
    if (document.getElementById("player-" + msg.plrid).classList.contains("me")) {
        document.iamadmin = true;
        console.log("I am admin");
        document.getElementById("chatbox").maxLength = "500000";
        // Clear interval
    }
}
