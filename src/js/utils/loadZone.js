var detail = require("../loadDetail");

module.exports = function (zone, players) {
    document.currentZone = zone;

    detail("Rendering Zone Layers")
    zone.layers.forEach(layer => {
        detail("Rendering Layer " + layer.name)
        var layerElement = document.createElement("img");
        layerElement.classList.add("layer");
        layerElement.src = layer.assetURL;
        if (layer.layer == 1) {
            layerElement.style = "z-index: 1;";
        } else {
            layerElement.style = `z-index: ${layer.layer + 1};`
        }
        detail("Adding Zone Layer")
        document.getElementById("game").appendChild(layerElement);
    });

    detail("Rendering Players")
    players.forEach(player => {
        detail("Rendering Player " + player.name)
        var plr = document.createElement("div");
        plr.className = "player";
        plr.id = "player-" + player.id;
        plr.innerHTML = `<div class="bubble" style="opacity: 0;"></div><div class="caret" id="caret">▼</div><img src="${player.avatar}" class="playerimage"><div class="username">${player.username}</div>`;
        plr.style.top = "calc(" + player.y.toString() + "%" + " - 150px)";
        plr.style.left = "calc(" + player.x.toString() + "%" + " - 150px)";
        detail("Adding Player")
        document.getElementById("game").appendChild(plr);
        if (document.currentZone == document.defaultZone) {
            if (player.admin) {
                document.getElementById("player-" + player.id).children[3].innerHTML = "<div class='red' style='display: contents;'>[ADMIN] </div>" + document.getElementById("player-" + player.id).children[3].innerText;
                document.getElementById("list").innerHTML += `<li id="listusr-${player.id}"><div class='red' style='display: contents;'>[ADMIN] </div>${player.username}</li>`
            } else {
                document.getElementById("list").innerHTML += `<li id="listusr-${player.id}">${player.username}</li>`
            }
        }

    });
}