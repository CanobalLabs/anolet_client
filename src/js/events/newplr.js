module.exports = function (msg, plrid) {
    if (msg.zone == document.currentZone.id) {
        var nplr = document.createElement("div");
        nplr.className = "player";
        nplr.id = "player-" + msg.id;
        nplr.innerHTML = `<div class="bubble" style="opacity: 0;"></div><div class="caret" id="caret">▼</div><img src="https://api-staging.anolet.com/user/${msg.id}/avatar/internal" class="playerimage"><div class="username">${msg.username}</div>`;
        if (msg.id == plrid) {
            nplr.classList.add("me");
        }
        if (msg.admin) {
            document.iamadmin = true;
            nplr.children[3].innerHTML = "<div class='red' style='display: contents;'>[ADMIN] </div>" + nplr.children[3].innerText;
        }
        nplr.style.top = `calc(${msg.y}% - 150px)`;
        nplr.style.left = `calc(${msg.x}% - 150px)`;
        document.getElementById("game").appendChild(nplr);
    }
    if (msg.existed && msg.id == plrid) {
        document.getElementById("loading").style.opacity = "0"
        setTimeout(function () {
            document.getElementById("loading").style.display = "none"
        }, 800);
    }
    
    if (msg.existed) { return };
    if (msg.admin) {
        document.getElementById("list").innerHTML += `<li id="listusr-${msg.id}"><div class='red' style='display: contents;'>[ADMIN] </div>${msg.username}</li>`
    } else {
        document.getElementById("list").innerHTML += `<li id="listusr-${msg.id}">${msg.username}</li>`
    }
}
