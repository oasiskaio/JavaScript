// é interessante para reduzir o array
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const soma = numeros.reduce(function(acumulador, valor, indice, array){
       return acumulador += valor
}, 0)

const pares = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 == 0)  acumulador.push(valor);
    return acumulador
}, [])
console.log(pares)

const dobro = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador.push(valor*2)
    return acumulador
}, [])
console.log(dobro)



const pessoas = [
    {nome: 'kaio', idade: 19},
    {nome: 'maria', idade: 23},
    {nome: 'eduardo', idade: 55},
    {nome: 'leticia', idade: 10},
    {nome: 'rosana', idade: 32},
    {nome: 'wallace', idade: 47}
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
})
console.log(maisVelha)