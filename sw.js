self.addEventListener('install', (event) => {
    
    
    event.waitUntil(caches.open('static').then(catche => {
        return catche.addAll("./index.html", "./assets/images/logo-3.png")
    }))
});


self.addEventListener('fetch', (event) => {
    console.log(`request loaded, ${event.request.url}`)
})