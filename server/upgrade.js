const axios = require("axios");
const jwt = require("jsonwebtoken");
const log = require("../utils/logger");

module.exports = function(server, wss) {
    server.on('upgrade', async (request, socket, head) => {
        if (request.url.startsWith("/ws/")) {
            // [2] = gameid
            // [3] = YT
            // [4] = rest of token
            if (!request.url.split("/")[3] || !request.url.split("/")[2]) return;
            axios.get("https://staging-api-infra.anolet.com/ACCService/" + request.url.split("/")[2] + "/requestGameLaunchAuthorization", {
                headers: {
                    "Authorization": request.url.split("/")[3] + "/" + request.url.split("/")[4]
                }
            }).then(res => {
                jwt.verify(res.data, process.env.HASH, function (err, decoded) {
                    if (err) return console.log("not authorized");
                    log("Approved", decoded.user + " for game " + decoded.game, "Magenta");
                    wss.handleUpgrade(request, socket, head, socket => {
                        wss.emit('connection', socket, request, decoded);
                    });
                })
            }).catch((err) => {
                return;
            });
        }
    });
}