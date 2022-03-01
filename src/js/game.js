import { start } from "./websocket"; // Import our websocket handler
import "../scss/main.scss"; // Import SCSS
import "./animation/logo" // Import animation for the logo

function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
 };


start().then(wsresp => {
    var ws = wsresp;

    // Ran by MouseClick Event
    function moved(event) {
        console.log(event)
        console.log(ws.plrid)
        document.getElementById("player-" + ws.plrid).style.top = "calc(" + percentage(event.clientY, window.innerHeight).toString() + "%" + " - 100px)";
        document.getElementById("player-" + ws.plrid).style.left = "calc(" + percentage(event.clientX, window.innerWidth).toString() + "%" + " - 100px)";
        ws.ws.send(JSON.stringify({
            type: "pos",
            x:  percentage(event.clientX, window.innerWidth),
            y: percentage(event.clientY, window.innerHeight)
        }));
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