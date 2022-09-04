self.addEventListener("install", (event) => {
    console.log("Service Worker : Installed!")

    event.waitUntil(
        
        (async() => {
            try {
                cache_obj = await caches.open(cache)
                cache_obj.addAll(caching_files)
            }
            catch{
                console.log("error occured while caching...")
            }
        })()
    )
} );


self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request)
        })
    )
});



