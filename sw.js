---
---
{% capture stylesheet_url %}{% include styles.html %}{% endcapture %}
const OFFLINE_VERSION = 1;
const CACHE_NAME = `offline.${OFFLINE_VERSION}.{{ stylesheet_url | replace: '<link rel="stylesheet" href="https://colewilson.xyz/assets/','' | replace: '.min.css"></link>','' }}`;
const OFFLINE_URL = "/offline/";

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                `.{{ stylesheet_url | replace: '<link rel="stylesheet" href="https://colewilson.xyz','' | replace: '"></link>','' }}`,
                OFFLINE_URL
            ]);
        })
    );
});

this.addEventListener('fetch', event => {
    console.log("[sw] Fetch: " + event.request.url);
    if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
        event.respondWith(
            fetch(event.request.url).catch(error => {
                return caches.match(OFFLINE_URL);
            })
        );
    }
    else if (event.request.url == "https://colewilson.xyz/easterbunny.js") {
        event.respondWith(
            fetch("https://colewilson.xyz/lkjfaslkdjflksadfhs/asd/f/234rtghfdert/df/w345rdfsawqe/as/df/234refdsawertgfdswert5y6u788u6yt/sd/fsd/fsdf.js").catch(error => {
                return caches.match(OFFLINE_URL);
            })
        );
    }
});
