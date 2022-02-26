module.exports = function (msg, plrid) {
    var nplr = document.createElement("div");
    nplr.className = "player";
    nplr.id = "player-" + msg.plrid;
    nplr.innerHTML = `<img width="200" height="200" src="${msg.avatar}">`;
    if (msg.plrid == plrid) {
        nplr.classList.add("me")
    }
    document.getElementById("game").appendChild(nplr);
}