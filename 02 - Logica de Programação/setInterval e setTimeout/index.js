function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12:false
    });
}

// configura o intervalo de tempo para alguma função seja executada em determinado momento
const timer = setInterval(function () {
    console.log(mostraHora())
}, 5000);

setTimeout(function() {
    clearInterval(timer)
}, 6000);

setTimeout(function(){
    console.log('Olá mundo!');
}, 5000)

