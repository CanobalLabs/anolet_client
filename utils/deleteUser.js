const removeItem = require("./removeItem");
const axios = require("axios")
module.exports = async function (game, user, currentGames, pubsub, client) {
    removeItem(currentGames, game);
    await client.sRem('players:' + game, user);
    await client.sRem('playersGlobal', user);
    await client.del('player:' + game + ":" + user);
    if (await client.sCard('players:' + game) == 0) await client.del("game:" + game);
    pubsub.broadcast(game, JSON.stringify({
        type: "exit",
        id: user,
        oldZone: null,
        newZone: ""
    }));
}
