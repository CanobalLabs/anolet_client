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

    // Ran when username is chosen
    function username(event, el) {
        if (event.which == 13) {
            if (event.target.value.length > 20 || event.target.value.length < 3) return;
            ws.ws.send(JSON.stringify({
                type: "setname",
                username: event.target.value
            }));   
            el.placeholder = "Send a chat message"
            el.value = "";
            el.maxLength = "100";
            el.attributes.onkeydown.value = "chat(event, this)";
        }
    };
    window.username = username;

    // Ran when chat is sent
    function chat(event, el) {
        if (event.which == 13) {
            if (event.target.value.length > 50 || event.target.value.length < 3) return;
            ws.ws.send(JSON.stringify({
                type: "chat",
                message: event.target.value
            }));
            el.disabled = true;
            var timeLeft = 3;
            el.placeholder = "Please wait 3 seconds...";
            var timeout = setInterval(() => {
                timeLeft--;
                el.placeholder = "Please wait " + timeLeft + " seconds...";
                if (timeLeft == 0) {
                    el.placeholder = "Send a chat message";
                    el.disabled = false
                }
            }, 1000);
            setTimeout(function() {clearInterval(timeout) }, 3000);
            el.value = "";
        }
    };
    window.chat = chat;
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