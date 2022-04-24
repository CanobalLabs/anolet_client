import { start } from "./websocket"; // Import our websocket handler
import "../scss/main.scss"; // Import SCSS
import "./animation/logo" // Import animation for the logo
import '@jamescoyle/svg-icon'

function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
};


start().then(wsresp => {
    var ws = wsresp;

    // Ran by MouseClick Event
    function moved(event) {
        ws.ws.send(JSON.stringify({
            type: "pos",
            x: percentage(event.clientX, window.innerWidth),
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
            if (document?.iamadmin != true && (event.target.value.length > 100 || event.target.value.length < 3)) return;
            ws.ws.send(JSON.stringify({
                type: "chat",
                message: event.target.value
            }));
            if (!document.iamadmin) {
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
                setTimeout(function () { clearInterval(timeout) }, 3000);
                setTimeout(function () {
                    el.placeholder = "Send a chat message";
                    el.disabled = false
                }, 3000); // bandaid solution
            }
            el.value = "";
        }
    };
    window.chat = chat;

    // Ran when character is selected
    function avatar(id) {
        ws.ws.send(JSON.stringify({
            type: "setavatar"
        }));
    };
    window.avatar = avatar; // Make it available to the frontend or else webpack will change the name


    function kick(id) {
        ws.ws.send(JSON.stringify({
            type: "kick",
            id: id.substring(7)
        }));
    }
    window.kick = kick;
    // aghhhhh this is so bad, REFACTORING NEEDED EVENTUALLY (OF THE ENTIRE CLIENT)

    // Assign the move event to when the mouse is clicked
    document.getElementById("game").addEventListener("click", moved);

    document.getElementById("chat_toggle").addEventListener("click", function () {
        if (document.getElementById("chat").style.opacity == "0") {
            document.getElementById("chat").style["z-index"] = "1";
            document.getElementById("chat").style.opacity = "1";
            document.getElementById("chat_toggle").style.filter = "invert(1)";
        } else {
            setTimeout(function() {
                document.getElementById("chat").style["z-index"] = "-1";
            }, 200);
            document.getElementById("chat").style.opacity = "0";
            document.getElementById("chat_toggle").style.filter = "invert(0)";
        }
    });

    document.getElementById("menu_toggle").addEventListener("click", function () {
        if (document.getElementById("menu").style.opacity == "0") {
            document.getElementById("menu").style["z-index"] = "0";
            document.getElementById("menu").style.opacity = "1";
            document.getElementById("menu_toggle").style.filter = "invert(1)";
        } else {
            setTimeout(function() {
                document.getElementById("menu").style["z-index"] = "-1";
            }, 200);
            document.getElementById("menu").style.opacity = "0";
            document.getElementById("menu_toggle").style.filter = "invert(0)";
        }
    });
    document.getElementById("menu_close").addEventListener("click", function () {
        setTimeout(function() {
            document.getElementById("menu").style["z-index"] = "-1";
        }, 200);
        document.getElementById("menu").style.opacity = "0";
        document.getElementById("menu_toggle").style.filter = "invert(0)";
    });
    document.getElementById("avatar").addEventListener("click", function () {
        avatar();
    });
    console.log(ws)

});