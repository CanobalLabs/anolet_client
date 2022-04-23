function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
};

module.exports = function (msg) {
    msg.players.forEach(player => {
        var plr = document.createElement("div");
        plr.className = "player";
        plr.id = "player-" + player.id;
        plr.innerHTML = `<img src="/avatars/Avatar${player.avatar}.png" class="playerimage"><div class="username">${player.username}</div>`;
        plr.style.top = "calc(" + player.y.toString() + "%" + " - 100px)";
        plr.style.left = "calc(" + player.x.toString() + "%" + " - 100px)";
        document.getElementById("game").appendChild(plr);
        if (player.admin) {
            document.getElementById("player-" + player.id).children[1].innerHTML = "<div class='red' style='display: contents;'>[ADMIN] </div>" + document.getElementById("player-" + player.id).children[1].innerText;
        }
    });
}