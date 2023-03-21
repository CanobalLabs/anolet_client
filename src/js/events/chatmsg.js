function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
module.exports = function (msg) {
    var chat = document.createElement("div");
    var log = document.getElementById("log");
    var messages = document.getElementById("messages");
    var admin = "";
    chat.classList.add("message");
    if (msg?.system) {
        chat.innerHTML = `<b>System<span style="margin-left: 5px;" class="mdi mdi-check-decagram"></span>: </b>${msg.message}`;
    } else {
        if (msg.admin) {
            admin = "<div class='red' style='display: contents;'>[ADMIN] </div>";
        }
        if (msg.admin) {
            chat.innerHTML = `${admin}<b>${msg.username}: </b> ${msg.message}`;
        } else {
            chat.innerHTML = `${admin}<b>${escapeHtml(msg.username)}: </b> ${escapeHtml(msg.message)}`;
        }
    }

    messages.appendChild(chat);
    log.scrollTop = log.scrollHeight; // Scroll to bottom when new message is added
    
    
    // Remove old chat messages to save RAM
    if (messages.children.length >= 50) {
        messages.children[0].remove();
    }

    // bubble
    clearTimeout(document.chatHide);
    document.getElementById("player-" + msg.id).children[0].innerText = msg.message;
    document.getElementById("player-" + msg.id).children[0].style.opacity = "1";
    document.getElementById("player-" + msg.id).children[1].style.opacity = "1";
    document.chatHide = setTimeout(function() {
        document.getElementById("player-" + msg.id).children[0].style.opacity = "0";
        document.getElementById("player-" + msg.id).children[1].style.opacity = "0";
    }, 5000);
}
