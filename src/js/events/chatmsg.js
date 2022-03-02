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
    chat.innerHTML = `<b>${escapeHtml(msg.username)}: </b> ${escapeHtml(msg.message)}`;
    document.getElementById("log").appendChild(chat);
}
