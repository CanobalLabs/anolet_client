var wsurl = "";
var plrid;
var players = 0;


function updateCount(amount) {
    players = players + amount;
   // document.getElementById("players").innerHTML = players + " players";
}

export function start () {
   return new Promise((resolve, reject) => {

        // Determine WS URL based off of environment and connect
        if (window.location.host == "anolet.herokuapp.com") { wsurl = "wss://anolet.herokuapp.com/ws" } else { wsurl = "ws://192.168.0.36/ws" }
        var ws = new WebSocket(wsurl);
        
        // Notify the user if the connection is closed
        ws.onclose = function (e) {
            document.getElementById("interactive-wrapper").style.filter = "blur(5px)";
            document.getElementById("error").style.display = "block";
        };
        
        // Process the messages received by server and act accordingly
        ws.onmessage = function (event) {
            var msg = JSON.parse(event.data);

            require("./events/" + msg.type)(msg, plrid);
            if (msg.type == "init") {
                var plrid = msg.myid;
                updateCount(msg.players.length);
                resolve({ ws, plrid });
            } else if (msg.type == "newplr") {
                updateCount(1);
            } else if (msg.type == "exit") {
                updateCount(-1);
            };
        }
        
        ws.onerror = function (e) {
            document.getElementById("tit").innerHTML = "Unable to connect to server";
            document.getElementById("desc").innerHTML = "The client was unable to initiate a connection to the Websocket server.";
            document.getElementById("interactive-wrapper").style.filter = "blur(5px)";
            document.getElementById("error").style.display = "block";
        }
        
        // Close the socket connection when the browser is closed so the user is instantly removed from the game.
        window.onbeforeunload = function (evt) {
            evt.preventDefault();
            ws.close();
            return null;
        };
        
    });
    
}
