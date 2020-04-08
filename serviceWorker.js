//listening to life cycle events

//caching resources

const cacheName = "cache-v1"

const precachedResources = [
    "/",
    "index.html",
    "images/bg-intro-desktop.svg",
    "images/bg-intro-mobile.svg",
    "images/favicon-32x32.png",
    "images/icon-api.svg",
    "images/icon-budgeting.svg",
    "images/icon-close.svg",
    "images/icon-facebook.svg",
    "images/icon-hamburger.svg",
    "images/icon-instagram.svg",
    "images/icon-onboarding.svg",
    "images/icon-online.svg",
    "images/icon-pinterest.svg",
    "images/icon-twitter.svg",
    "images/icon-youtube.svg",
    "images/image-confetti.jpg",
    "images/image-currency.jpg",
    "images/image-mockups.png",
    "images/image-plane.jpg",
    "images/image-restaurant.jpg",
    "images/logo.svg",
    "scss/style.css",
    "main.js"
]

//install event
self.addEventListener("install", event => {
    console.log("Service worker installing");
    self.skipWaiting()
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            return cache.addAll(precachedResources);
        })
    )
    //add a call to skip waiting
})

//activate serviceworker
self.addEventListener("activate", event => {
    console.log("Service worker activated");
})

//fetch events 
self.addEventListener("fetch", event => {
    console.log("Fetching... ", event.request.url);
    event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
        if(cachedResponse) {
            return cachedResponse
        }
        return fetch(event.request)
    })
    )
})

