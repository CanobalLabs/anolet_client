module.exports = function (player) {
    if (player.admin === "true" || player.admin === true) {
        document.getElementById("list").innerHTML += `<li class="listuser" id="listusr-${player.id}"><div class='red' style='display: contents;'>[ADMIN] </div>${player.username}</li>`
    } else {
        document.getElementById("list").innerHTML += `<li id="listusr-${player.id}">${player.username}</li>`
    }
}