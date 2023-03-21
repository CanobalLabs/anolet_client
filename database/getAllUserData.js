const client = require("./init");

module.exports = async function (gameid) {
    // zuckerberg's favorite function
    return Promise.all(
        (await client.sMembers('players:' + gameid)).map(async (key) =>
            Object.assign(await client.hGetAll('player:' + gameid + ":" + key), {id: key})
        ))
}