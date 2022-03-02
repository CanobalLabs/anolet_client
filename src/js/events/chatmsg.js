module.exports = function (msg) {
    var chat = document.createElement("div");
    chat.innerHTML += `<b>`;
    chat.innerText += `${msg.username}: `
    chat.innerHTML += `</b>`
    chat.innerText += ` ${msg.message}`;
    document.getElementById("log").appendChild(chat);
}