function Enviar() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado')
  let pessoas = [];
form.addEventListener('submit', recebeEventoForm)
  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')
    resultado.innerHTML = ` nome:${nome.value} ${sobrenome.value} com ${peso.value}kg e ${altura.value} de altura.`
    

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    })
    console.log(pessoas)
  }
}


/*
let contador = 1;
function recebeEventoForm(evento) {
  evento.preventDefault();
  console.log(`Form não foi enviado ${contador}`);
  contador++;
}
form.addEventListener('submit', recebeEventoForm)
*/


/*  form.onsubmit = function(evento) {
      evento.preventDefault();
      alert(1);
      console.log('Foi enviado');
  };
*/
