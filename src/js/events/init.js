module.exports = function(msg) {
    msg.players.forEach(player => {
        var plr = document.createElement("div");
        plr.className = "player";
        plr.id = "player-" + player.id;
        plr.innerHTML = `<img width="200" height="200" src="${player.avatar}" class="playerimage">`;
        if (player.y == 0 && player.x == 0) {
            plr.style.top = player.y + "px";
            plr.style.left = player.x + "px";
        } else {
            plr.style.top = player.y - 230 + "px";
            plr.style.left = player.x - 110 + "px";
        }
        document.getElementById("game").appendChild(plr);
    });
}