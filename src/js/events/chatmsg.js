module.exports = function (msg) {
    var chat = document.createElement("div");
    var username = document.createElement("b");
    username.innerText = `${msg.username}: `;
    var chatel = document.getElementById("log").appendChild(chat);
    chatel.appendChild(username);
    chatel.innerText +=  ` ${msg.message}`;
}
