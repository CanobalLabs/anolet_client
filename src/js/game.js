import { start } from "./websocket"; // Import our websocket handler
import "../scss/main.scss"; // Import SCSS
import "./animation/logo" // Import animation for the logo

start().then(wsresp => {
    var ws = wsresp;

    // Ran by MouseClick Event
    function moved(event) {
        console.log(event)
        document.getElementById("player-" + ws.plrid).top = event.clientY - 230 + "px";
        document.getElementById("player-" + ws.plrid).left = event.clientX - 110 + "px";
        ws.ws.send(JSON.stringify({
            type: "pos",
            x: event.clientX,
            y: event.clientY
        }));
        console.log(event.clientX, event.clientY)
    }

    // Ran when character is selected
    function avatar(id) {
        // Play avatar animation
        require("./animation/changeAvatar")(id);
        document.getElementById("player-" + ws.plrid).firstElementChild.src = "./avatars/Avatar" + id + ".png";
        ws.ws.send(JSON.stringify({
            type: "setavatar",
            avatar: id
        }));
    };
    window.avatar = avatar; // Make it available to the frontend or else webpack will change the name

    // Assign the move event to when the mouse is clicked
    document.getElementById("game").addEventListener("click", moved);

    console.log(ws)

});