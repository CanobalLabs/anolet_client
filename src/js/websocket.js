var wsurl = "";
var plrid;
var players = 0;

const axios = require("axios")
var detail = require("./loadDetail");

export function start(gameid) {
    return new Promise((resolve, reject) => {

        detail("Finding Websocket Address")
        // Determine WS URL based off of environment and connect
        if (location.protocol === 'https:') {
            wsurl = window.location.origin.replace("https", "wss") + "/ws"
        } else {
            wsurl = window.location.origin.replace("http", "ws") + "/ws"
        }
        detail("Connecting To Websocket")
        var ws = new WebSocket(wsurl + "/" + gameid + "/" + new URLSearchParams(window.location.search).get("auth"));

        // Notify the user if the connection is closed
        ws.onclose = function (e) {
            detail("Websocket Connection Closed", true);
        };

        detail("Waiting On init Message")
        // Process the messages received by server and act accordingly
        ws.onmessage = function (event) {
            var msg = JSON.parse(event.data);

            require("./events/" + msg.type)(msg, plrid);
            if (msg.type == "init") {
                detail("Processing init Message")
                plrid = msg.myid;
                resolve({ ws, plrid });
            }
        }

        ws.onerror = function (e) {
            detail("Unable To Connect To Websocket", true)
        }
        // Close the socket connection when the browser is closed so the user is instantly removed from the game.
        window.onbeforeunload = function (evt) {
            evt.preventDefault();
            ws.close();
            return null;
        };


    });

}
