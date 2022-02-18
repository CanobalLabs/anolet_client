var ismoving = false;
var plrid = "";
var wsurl = "";

// Ran by MouseClick Event
function moved(event) {
    if (!ismoving) {
        document.getElementById("player-" + plrid).style.top = event.clientY - 230 + "px";
        document.getElementById("player-" + plrid).style.left = event.clientX - 110 + "px";
        ws.send(JSON.stringify({
            type: "pos",
            x: event.clientX,
            y: event.clientY
        }));
    }
}

// Ran when character is selected
function avatar(id) {
    document.getElementById("player-" + plrid).firstElementChild.src = "./avatars/Avatar" + id + ".png";
    ws.send(JSON.stringify({
        type: "setavatar",
        avatar: id
    }));
}

// Assign the move event to when the mouse is clicked
document.getElementById("game").addEventListener("click", moved);

// Determine WS URL based off of environment and connect
if (window.location.host == "oldiegoodie.herokuapp.com") { wsurl = "wss://oldiegoodie.herokuapp.com" } else { wsurl = "ws://192.168.0.36" }
var ws = new WebSocket(wsurl);

// Notify the user if the connection is closed
ws.onclose = function (e) {
    document.body.innerHTML = "<a>Connection to server has been lost. Please refresh the page.</a>";
};

// Process the messages received by server and act accordingly
ws.onmessage = function (event) {
    var msg = JSON.parse(event.data);

    switch (msg.type) {
        case "init":
            plrid = msg.myid;
            msg.players.forEach(player => {
                var plr = document.createElement("div");
                plr.className = "player";
                plr.id = "player-" + player.id;
                plr.innerHTML = `<img width="200" height="200" src="${player.avatar}">`;
                if (player.y == 0 && player.x == 0) {
                    plr.style.top = player.y + "px";
                    plr.style.left = player.x + "px";
                } else {
                    plr.style.top = player.y - 230 + "px";
                    plr.style.left = player.x - 110 + "px";
                }
                document.getElementById("game").appendChild(plr);
            });
            break;
        case "posupdate":
            document.getElementById("player-" + msg.id).style.top = msg.y - 230 + "px";
            document.getElementById("player-" + msg.id).style.left = msg.x - 110 + "px";
            break;
        case "newplr":
            var nplr = document.createElement("div");
            nplr.className = "player";
            nplr.id = "player-" + msg.plrid;
            nplr.innerHTML = `<img width="200" height="200" src="${msg.avatar}">`;

            if (msg.plrid == plrid) {
                nplr.classList.add("me")
            }
            document.getElementById("game").appendChild(nplr);
            break;
        case "exit":
            document.getElementById("player-" + msg.plrid).remove();
            break;
        case "avatar":
            document.getElementById("player-" + msg.plrid).firstElementChild.src = msg.avatar;
            break;
    }
}

// Close the socket connection when the browser is closed so the user is instantly removed from the game.
window.onbeforeunload = function (evt) {
    evt.preventDefault();
    ws.close();
    return null;
};