module.exports = function (msg, plrid) {
  var nplr = document.createElement("div");
  nplr.className = "player";
  nplr.id = "player-" + msg.plrid;
  nplr.innerHTML = `<div class="bubble" style="opacity: 0;"></div><div class="caret" id="caret">▼</div><img src="${msg.avatar}" class="playerimage"><div class="username">${msg.username}</div>`;
  if (msg.plrid == plrid) {
    nplr.classList.add("me");
  }
  if (msg.admin) {
    document.iamadmin = true;
    nplr.children[3].innerHTML =
      "<div class='red' style='display: contents;'>[ADMIN] </div>" +
      nplr.children[3].innerText;
  }
  nplr.style.top = `calc(${msg.y}% - 100px)`;
  nplr.style.left = `calc(${msg.x}% - 100px)`;
  document.getElementById("game").appendChild(nplr);
  if (msg.admin) {
    document.getElementById(
      "list"
    ).innerHTML += `<li id="listusr-${msg.plrid}"><div class='red' style='display: contents;'>[ADMIN] </div>${msg.username}</li>`;
  } else {
    document.getElementById(
      "list"
    ).innerHTML += `<li id="listusr-${msg.plrid}">${msg.username}</li>`;
  }
};
