const client = require("../database/init");

module.exports = async function (msg, locals, wss) {
  if (msg.message.length > 150 || msg.message.length < 2) return;
  if ((await client.get("timeout:" + locals.game + ":" + locals.user)) != null)
    return;
  client.set("timeout:" + locals.game + ":" + locals.user, 0xff, { EX: 1 });
  wss.broadcast(
    locals.game,
    JSON.stringify({
      type: "chatmsg",
      plrid: locals.user,
      username: await client.hGet("player:" + locals.game + ":" + locals.user, [
        "username",
      ]),
      admin:
        (await client.hGet("player:" + locals.game + ":" + locals.user, [
          "admin",
        ])) == "true",
      message: msg.message,
    })
  );
};
