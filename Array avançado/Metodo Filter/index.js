// Sempre retornar um array, com a memsa quantidades de elementos ou menos
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const maior10 = numeros.filter((valor, indice, array) => {
    return valor > 10;
 })
console.log(maior10)


// Retorne as pessoas que tem o o nome com 5 letras ou mais
// Retorne as pessoas com  mais de 50 anos
// Retorne as  pessoas cujo  noome  termina com a
const pessoas = [
    {nome: 'kaio', idade: 19},
    {nome: 'maria', idade: 23},
    {nome: 'eduardo', idade: 55},
    {nome: 'leticia', idade: 10},
    {nome: 'rosana', idade: 32},
    {nome: 'wallace', idade: 47}
];

const nomeGrande = pessoas.filter((valor) => valor.nome.length >= 5)
console.log(nomeGrande)

const comMaisDeCinquenta = pessoas.filter((valor) => valor.idade > 50)
console.log(comMaisDeCinquenta)

const terminaA = pessoas.filter((valor) => {
    return valor.nome.toLowerCase().endsWith('a');
})
console.log(terminaA)
