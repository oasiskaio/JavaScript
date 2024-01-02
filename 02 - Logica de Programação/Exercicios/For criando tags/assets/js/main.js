function iniciar(){
const elementos = [
    {tag: "p", texto: 'Frase 1' },
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3' },
    {tag: 'section', texto: 'Frase 4' },
];
const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
   let {tag, texto} = elementos[i];
   let elementoCriado = document.createElement(tag);
   let textoAdicionado = document.createTextNode(texto);
   elementoCriado.appendChild(textoAdicionado)
   div.appendChild(elementoCriado);
  /* elementoCriado.innerHTML ou innerText(mais seguro) = texto */
}
container.appendChild(div)
}