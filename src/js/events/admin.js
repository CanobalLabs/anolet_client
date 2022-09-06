module.exports = function(msg) {
    document.getElementById("player-" + msg.plrid).children[1].innerHTML = "<div class='red' style='display: contents;'>[ADMIN] </div>" + document.getElementById("player-" + msg.plrid).children[1].innerText;
    if (document.getElementById("player-" + msg.plrid).classList.contains("me")) {
        document.iamadmin = true;
        console.log("I am admin");
        document.getElementById("chatbox").maxLength = "500000";
        document.querySelectorAll('.player').forEach(player => {
            player.children[1].innerHTML += `<span id="kick-${player.id}" style="margin-left: 5px; cursor: pointer; z-index: 5000" class="mdi mdi-close-circle"></span>`;
            document.getElementById("kick-" + player.id).addEventListener("click", function() {
                kick(player.id);
            });
        })
        // Clear interval
    }
}
