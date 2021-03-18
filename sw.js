---
---
{% capture stylesheet_url %}{% include styles.html %}{% endcapture %}
const OFFLINE_VERSION = 2;
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
    if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
        if (event.request.url == 'easterbunny.js') {
            console.log("HA!!!)
        }
        event.respondWith(
            fetch(event.request.url).catch(error => {
                return caches.match(OFFLINE_URL);
            })
        );
    } else {
        event.respondWith(caches.match(event.request)
            .then(function(response) {
                return response || fetch(event.request);
            })
        );
    }
});
