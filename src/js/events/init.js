function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
};

module.exports = function (msg) {
    msg.players.forEach(player => {
        var plr = document.createElement("div");
        plr.className = "player";
        plr.id = "player-" + player.id;
        plr.innerHTML = `<img src="${player.avatar}" class="playerimage">`;
        plr.style.top = "calc(" + player.y.toString() + "%" + " - 100px)";
        plr.style.left = "calc(" + player.x.toString() + "%" + " - 100px)";
        document.getElementById("game").appendChild(plr);
    });
}