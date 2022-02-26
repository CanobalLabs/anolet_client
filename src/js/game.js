import "../scss/main.scss";
import { start } from "./websocket";

start().then(wsresp => {
    var ws = wsresp;


    // Ran by MouseClick Event
    function moved(event) {
        document.getElementById("player-" + ws.plrid).style.top = event.clientY - 230 + "px";
        document.getElementById("player-" + ws.plrid).style.left = event.clientX - 110 + "px";
        ws.ws.send(JSON.stringify({
            type: "pos",
            x: event.clientX,
            y: event.clientY
        }));
        console.log(event.clientX, event.clientY)
    }

    // Ran when character is selected
    function avatar(id) {
        document.getElementById("player-" + ws.plrid).firstElementChild.src = "./avatars/Avatar" + id + ".png";
        ws.ws.send(JSON.stringify({
            type: "setavatar",
            avatar: id
        }));
    };
    window.avatar = avatar;

    // Assign the move event to when the mouse is clicked
    document.getElementById("game").addEventListener("click", moved);

    console.log(ws)

});