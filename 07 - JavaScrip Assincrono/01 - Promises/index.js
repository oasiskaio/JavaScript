function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE')
        setTimeout(() => {
              resolve(msg)
        }, tempo);
    })
}

esperaAi('Concexão com o BD', rand(1, 3))
  .then(resposta => {
    console.log(resposta); // Mostra na tela o disparo da função com os parametros acima
    return esperaAi('Buscando dados da BASE', rand(1, 3));  // retorna uma nova função com outros parametros
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Tratando os dados da BASE', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
  })
  .then(() => {
    console.log('Exibe dados na tela')
  })
  .catch( e => {
    console.log('ERROR', e)
  });