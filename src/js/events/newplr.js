module.exports = function (msg, plrid) {
    var nplr = document.createElement("div");
    nplr.className = "player";
    nplr.id = "player-" + msg.plrid;
    nplr.innerHTML = `<img src="${msg.avatar}" class="playerimage">`;
    if (msg.plrid == plrid) {
        nplr.classList.add("me");
        document.getElementsByClassName("choose-image-" + msg.avatar_id)[0].classList.add("selected");
    }
    document.getElementById("game").appendChild(nplr);
    console.log(msg.avatar_id);
}
