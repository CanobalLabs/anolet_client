const { createClient } = require("redis");
const client = createClient({
    url: process.env.REDIS_URL,
    socket: {
        tls: true,
        rejectUnauthorized: false
    }
});

client.on('error', function (err) {
    console.error('Redis error:', err);
});

module.exports = client;