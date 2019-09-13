const r = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('promise resolved :)')
    }, 3000)
})

r.then(val => {console.log(val)})
console.log('Async call')
