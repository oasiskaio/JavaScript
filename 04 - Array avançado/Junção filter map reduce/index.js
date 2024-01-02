// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 6, 9, 15, 16]
const numerospares = numeros
   .filter(valor => valor % 2 == 0)
   .map(valor => valor * 2)
   .reduce((acumulador, valor) => acumulador + valor);
console.log(numerospares)