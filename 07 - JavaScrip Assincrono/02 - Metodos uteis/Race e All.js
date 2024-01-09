function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE')
        setTimeout(() => {
              resolve(msg.toUpperCase())
        }, tempo);
    })
}

const Promises = [
    esperaAi('promise 1', 3000),
    esperaAi('promise 2', 500),
    esperaAi('promise 3', 1000),
]

Promise.all(Promises)
.then(valores => {
    console.log(valores)
})

Promise.race(Promises)
.then(valor => {
    console.log(valor)
})
