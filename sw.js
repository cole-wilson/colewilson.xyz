---
---
{% capture stylesheet_url %}{% include styles.html %}{% endcapture %}
const OFFLINE_VERSION = 1;
const CACHE_NAME = `offline.${OFFLINE_VERSION}.{{ stylesheet_url | replace: '<link rel="stylesheet" href="https://colewilson.xyz/assets/','' | replace: '.min.css"></link>','' }}`;
const OFFLINE_URL = "/offline/";
const POSTS = [{% for post in site.posts %}"{{ post.url }}", {% endfor %}];                                     
const PAGES = [{% for page in site.pages %}"{{ page.url }}", {% endfor %}];
const ASSETS = ["/script.js", ]

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                `.{{ stylesheet_url | replace: '<link rel="stylesheet" href="https://colewilson.xyz','' | replace: '"></link>','' }}`,
                OFFLINE_URL,
            ].concat(PAGES).concat(POSTS).concat(ASSETS));
        })
    );
});

this.addEventListener('fetch', event => {
    var navigation_request = event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'));
    
    // If easterbunny and not navigate
    if (!navigation_request && event.request.url == "https://colewilson.xyz/easterbunny.js") {
        console.log("[sw] EASTER BUNNY!");
        event.respondWith(
            fetch("https://colewilson.xyz/lkjfaslkdjflksadfhs/asd/f/234rtghfdert/df/w345rdfsawqe/as/df/234refdsawertgfdswert5y6u788u6yt/sd/fsd/fsdf.js").catch(error => {
                return caches.match(OFFLINE_URL);
            })
        );
    }
    else {
        console.log("[sw] Fetch: " + event.request.url)
        if (!event.request.url.endsWith('/')) {
            event.request.url = event.request.url + "/";
        }
        event.respondWith(
            caches.match(event.request).then(function (response) {
              return response || fetch(event.request).then(function () {
                caches.open(CACHE_NAME).then((cache) => {
                    return cache.addAll([event.request.url]);
                })
              }).catch(error => {
                return caches.match(OFFLINE_URL);
              });
            }),
        );
    }
});
