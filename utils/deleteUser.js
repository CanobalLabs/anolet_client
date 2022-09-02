const removeItem = require("./removeItem")
module.exports = async function (game, user, currentGames, pubsub) {
    removeItem(currentGames, game);
    await client.sRem('players:' + game, user);
    await client.sRem('playersGlobal', user);
    await client.del('player:' + game + ":" + user);
    pubsub.broadcast(game, JSON.stringify({
        type: "exit",
        plrid: user
    }));
}
