var detail = require("../loadDetail");

module.exports = function (player) {
    var plr = document.createElement("div");
    var innerHTML = "";
    plr.className = "player";
    plr.id = "player-" + player.id;
    innerHTML += `
    <div class="bubble" style="opacity: 0;"></div>
    <div class="caret" id="caret">▼</div>
    <div class="playerimage">
    `
    player.avatar.shoes.forEach(item => {
        innerHTML += "<img src=\"https://cdn.canobal.com/items/" + item + "/internal.png" + "\" class=\"itemobject\">"
    });
    player.avatar.bodies.forEach(item => {
        innerHTML += "<img src=\"https://cdn.canobal.com/items/" + item + "/internal.png" + "\" class=\"itemobject\">"
    });
    player.avatar.faces.forEach(item => {
        innerHTML += "<img src=\"https://cdn.canobal.com/items/" + item + "/internal.png" + "\" class=\"itemobject\">"
    });
    player.avatar.accessories.forEach(item => {
        innerHTML += "<img src=\"https://cdn.canobal.com/items/" + item + "/internal.png" + "\" class=\"itemobject\">"
    });
    
    innerHTML += `
    </div>
    <div class="username">${player.username}</div>
    `
    plr.innerHTML = innerHTML;
    plr.style.top = "calc(" + player.y.toString() + "%" + " - " + gameState.worldSettings.avatarScale/2 + "px)";
    plr.style.left = "calc(" + player.x.toString() + "%" + " - " + gameState.worldSettings.avatarScale/2 + "px)";
    plr.children[2].style.width = gameState.worldSettings.avatarScale + "px";
    detail("Adding Player")
    document.getElementById("game").appendChild(plr);
    if (player.admin === "true" || player.admin === true) document.getElementById("player-" + player.id).children[3].innerHTML = "<div class='red' style='display: contents;'>[ADMIN] </div>" + document.getElementById("player-" + player.id).children[3].innerText;
}