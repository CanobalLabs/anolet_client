const client = require("./init");

module.exports = async function (gameid) {
    // zuckerberg's favorite function
    return await Promise.all((await client.sMembers('players:' + gameid)).map(async (key) => await client.hGetAll('player:' + gameid + ":" + key)))
}