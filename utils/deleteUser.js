const removeItem = require("./removeItem")
module.exports = async function (game, user, currentGames, pubsub, client) {
    removeItem(currentGames, game);
    if (!currentGames.includes(game)) {
        // one last request to set player count to 0
        if (process.env.ENVIRONMENT != "dev") axios.patch(process.env.BASE_URL + "/ACCService/" + game + "/setPlayerCount/0", null, {
            headers: {
                "serverauth": process.env.HASH
            }
        });
    }
    await client.sRem('players:' + game, user);
    await client.sRem('playersGlobal', user);
    await client.del('player:' + game + ":" + user);
    pubsub.broadcast(game, JSON.stringify({
        type: "exit",
        plrid: user
    }));
}
