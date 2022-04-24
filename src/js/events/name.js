module.exports = function (msg) {
    document.getElementById("player-" + msg.plrid).children[1].innerText = msg.username;
    if (document.iamadmin) {
        document.getElementById("player-" + msg.plrid).children[1].innerHTML += `<span id="kick-${msg.plrid}" style="margin-left: 5px; cursor: pointer;" class="mdi mdi-close-circle"></span>`;
        document.getElementById("kick-" + msg.plrid).addEventListener("click", function () {
            kick("player-" + msg.plrid);
        });
    }
}