const axios = require("axios");
const jwt = require("jsonwebtoken");
const log = require("../utils/logger");

const Websocket = require('ws');
const { validate } = require("webpack");
const ErrorWSS = new Websocket.Server({ noServer: true });

ErrorWSS.on('connection', async (ws, req, errorMessage) => {
    ws.send(errorMessage);
    ws.close();
});

module.exports = function (server, wss, client) {
    server.on('upgrade', async (request, socket, head) => {
        var err = "";
        function joinGame(data) {
            jwt.verify(data, process.env.HASH, async function (err, decoded) {
                if (err) {
                    ErrorWSS.handleUpgrade(request, socket, head, socket => {
                        ErrorWSS.emit('connection', socket, request, "Invalid Token");
                    });
                    return;
                }
                /* if ((await client.sMembers('playersGlobal')).includes(decoded.user)) {
                    // This user is already in a game
                    ErrorWSS.handleUpgrade(request, socket, head, socket => {
                        ErrorWSS.emit('connection', socket, request, "You are already in a game");
                    });
                    return;
                } */
                log("Approved", decoded.user + " for game " + decoded.game, "Magenta");
                wss.handleUpgrade(request, socket, head, socket => {
                    wss.emit('connection', socket, request, decoded);
                });
            })
        }
        if (request.url.startsWith("/ws/")) {
            // [2] = gameid
            // [3] = YT
            // [4] = rest of token
            if (!request.url.split("/")[3] || !request.url.split("/")[2]) return;
            if (request.url.split("/")[3].startsWith("ey")) {
                // We are directly being provided the ACCService JWT
                return joinGame(request.url.split("/")[3]);
            }
            axios.post(process.env.BASE_URL + "/ACCService/" + request.url.split("/")[2] + "/requestGameLaunchAuthorization", null, {
                headers: {
                    "Authorization": request.url.split("/")[3] + "/" + request.url.split("/")[4]
                }
            }).then(res => {
                joinGame(res.data)
            }).catch((err) => {
                console.error(err)
                ErrorWSS.handleUpgrade(request, socket, head, socket => {
                    ErrorWSS.emit('connection', socket, request, "You aren't allowed to join that game.");
                });
                return;
            });
        }
    });
}
