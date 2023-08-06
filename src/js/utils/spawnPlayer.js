var detail = require("../loadDetail");

module.exports = function (player) {
    var plr = document.createElement("div");
    plr.className = "player";
    plr.id = "player-" + player.id;
    plr.innerHTML = `<div class="bubble" style="opacity: 0;"></div><div class="caret" id="caret">▼</div><img src="https://api-staging.anolet.com/user/${player.id}/avatar/internal" class="playerimage"><div class="username">${player.username}</div>`;
    plr.style.top = "calc(" + player.y.toString() + "%" + " - " + gameState.worldSettings.avatarScale/2 + "px)";
    plr.style.left = "calc(" + player.x.toString() + "%" + " - " + gameState.worldSettings.avatarScale/2 + "px)";
    plr.children[2].style.width = gameState.worldSettings.avatarScale + "px";
    detail("Adding Player")
    document.getElementById("game").appendChild(plr);
    if (player.admin === "true" || player.admin === true) document.getElementById("player-" + player.id).children[3].innerHTML = "<div class='red' style='display: contents;'>[ADMIN] </div>" + document.getElementById("player-" + player.id).children[3].innerText;
}