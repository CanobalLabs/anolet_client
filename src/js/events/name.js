module.exports = function (msg) {
    document.getElementById("player-" + msg.plrid).children[1].innerText = msg.username;
    if (document.iamadmin) {
        document.getElementById("player-" + msg.plrid).children[1].innerHTML += `<div id="kick-${msg.plrid}"><span style="margin-left: 5px; cursor: pointer; z-index: 5000;" class="mdi mdi-close-circle"></span></div>`;
        document.getElementById("kick-" + msg.plrid).addEventListener("click", function () {
            kick("player-" + msg.plrid);
        });
    }
}
