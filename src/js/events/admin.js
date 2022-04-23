module.exports = function(msg) {
    document.getElementById("player-" + msg.plrid).children[1].innerHTML = "<div class='red' style='display: contents;'>[ADMIN] </div>" + document.getElementById("player-" + msg.plrid).children[1].innerText;
    if (document.getElementById("player-" + msg.plrid).classList.contains("me")) {
        document.iamadmin = true;
        console.log("I am admin");
        document.getElementById("chatbox").maxLength = "500000";
        document.querySelectorAll('.player').forEach(player => {
            player.children[1].innerHTML += '<div style="display: contents; margin-left: 5px;"><svg-icon type="mdi" path="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z"></svg-icon></div>'
        })
        // Clear interval
    }
}