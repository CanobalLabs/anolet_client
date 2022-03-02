module.exports = function (msg) {
    var chat = document.createElement("div");
    var username = document.createElement("b");
    username.innerText = `${msg.username}: `;
    chat.appendChild(username);
    chat.innerText +=  ` ${msg.message}`;
    document.getElementById("log").appendChild(chat);
}
