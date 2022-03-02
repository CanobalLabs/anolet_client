function escapeHtml(unsafe)
{
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
    chat.classList.add("message");
    chat.innerHTML = `<b>${escapeHtml(msg.username)}: </b> ${escapeHtml(msg.message)}`;
    log.appendChild(chat);
    log.scrollTop = log.scrollHeight; // Scroll to bottom when new message is added
}
