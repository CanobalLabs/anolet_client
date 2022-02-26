module.exports = function (msg, plrid) {
    var nplr = document.createElement("div");
    nplr.className = "player";
    nplr.id = "player-" + msg.plrid;
    nplr.innerHTML = `<img width="200" height="200" src="${msg.avatar}" class="playerimage">`;
    if (msg.plrid == plrid) {
        nplr.classList.add("me")
    }
    document.getElementById("game").appendChild(nplr);
    console.log(msg.avatar_id)
    document.getElementsByClassName("choose-image")[msg.avatar_id - 1].classList.add("selected");
}