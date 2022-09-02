const { createClient } = require("redis");
const client = createClient({
    url: process.env.REDIS_URL,
    socket: {
        tls: process.env.REDIS_URL.startsWith("rediss://"),
        rejectUnauthorized: false
    }
});

client.on('error', function (err) {
    console.error('Redis error:', err);
});

module.exports = client;