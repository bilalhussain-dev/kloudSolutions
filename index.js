if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(register => {
        console.log("Registers", register)
    }).catch(err => {
        console.log('Failed')
    })
}