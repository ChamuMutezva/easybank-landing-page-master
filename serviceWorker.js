//listening to life cycle events
//install event
self.addEventListener("install", event => {
    console.log("Service worker installing");
    self.skipWaiting()
    //add a call to skip waiting
})

//activate serviceworker
self.addEventListener("activate", event => {
    console.log("Service worker activated");
})

//fetch events 
self.addEventListener("fetch", event => {
    console.log("Fetching... ", event.request.url)
})

