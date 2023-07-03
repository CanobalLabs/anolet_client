var currentGame = null;

self.addEventListener("install", async event => {
    const globalCache = await caches.open("global-cache");
    globalCache.add("loading.html");
});

self.addEventListener("message",async (event) => {
    if (event.data.type == "setGame") {
        if (await caches.has(`game-${event.data.payload}`)) {
            currentGame = event.data.payload;
            caches.open(`game-${event.data.payload}`).then(async (cache) => cache.addAll(await (await fetch("https://api-staging.anolet.com/game/3/cacheableAssets")).json()));
        } else {
            currentGame = event.data.payload;
            caches.open(`game-${event.data.payload}`).then(async (cache) => cache.addAll(await (await fetch("https://api-staging.anolet.com/game/3/cacheableAssets")).json()));
        }
    }
    if (event.data.type == "checkCacheStatus") {
        // We call the Anolet API, delete assets no longer being cached, and add assets that are now being cached
        event.ports[0].postMessage(SW_VERSION);
    }
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            // It can update the cache to serve updated content on the next request
            return cachedResponse || fetch(event.request);
        }
        )
    )
});

