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
        ws.ws.send(JSON.stringify({
            type: "pos",
            x:  percentage(event.clientX, window.innerWidth),
            y: percentage(event.clientY, window.innerHeight)
        }));
    }

    // Ran when character is selected
    function avatar(id) {
        require("./animation/changeAvatar")(id);
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