function percentage(partialValue, totalValue) {
  return (100 * partialValue) / totalValue;
}

var detail = require("../loadDetail");

module.exports = function (msg) {
  detail("Rendering Players");
  msg.players.forEach((player) => {
    detail("Rendering Player " + player.name);
    var plr = document.createElement("div");
    plr.className = "player";
    plr.id = "player-" + player.id;
    plr.innerHTML = `<div class="bubble" style="opacity: 0;"></div><div class="caret" id="caret">▼</div><img src="${player.avatar}" class="playerimage"><div class="username">${player.username}</div>`;
    plr.style.top = "calc(" + player.y.toString() + "%" + " - 100px)";
    plr.style.left = "calc(" + player.x.toString() + "%" + " - 100px)";
    detail("Adding Player");
    document.getElementById("game").appendChild(plr);
    if (player.admin) {
      document.getElementById("player-" + player.id).children[3].innerHTML =
        "<div class='red' style='display: contents;'>[ADMIN] </div>" +
        document.getElementById("player-" + player.id).children[3].innerText;
      document.getElementById(
        "list"
      ).innerHTML += `<li id="listusr-${player.id}"><div class='red' style='display: contents;'>[ADMIN] </div>${player.username}</li>`;
    } else {
      document.getElementById(
        "list"
      ).innerHTML += `<li id="listusr-${player.id}">${player.username}</li>`;
    }
  });

  detail("Rendering Menu");
  document.getElementById("game-name").innerText = msg.gameState.title;
  document.getElementById("game-author").innerText = msg.gameState.creator.name;
  document.getElementById("game-image").src = msg.gameState.iconAssetURL;

  detail("Initializing Speed Animation");
  var styleSheet = document.createElement("style");
  styleSheet.innerHTML = `
    .player {
        transition: top ${msg.gameState.worldSettings.defaultSpeed}s ease-out, left ${msg.gameState.worldSettings.defaultSpeed}s ease-out, opacity ${msg.gameState.worldSettings.defaultSpeed}s ease-out;
    }
    `;
  document.head.appendChild(styleSheet);

  detail("Calculating Zone Settings");
  document.defaultZone = msg.gameState.zones.find(
    (zone) => zone.id == msg.gameState.worldSettings.defaultZone
  );
  document.currentZone = document.defaultZone;

  detail("Rendering Zone Layers");
  document.defaultZone.layers.forEach((layer) => {
    detail("Rendering Layer " + layer.name);
    var layerElement = document.createElement("img");
    layerElement.classList.add("layer");
    layerElement.src = layer.assetURL;
    if (layer.layer == 1) {
      layerElement.style = "z-index: 1;";
    } else {
      layerElement.style = `z-index: ${layer.layer + 1};`;
    }
    detail("Adding Zone Layer");
    document.getElementById("game").appendChild(layerElement);
  });
};
