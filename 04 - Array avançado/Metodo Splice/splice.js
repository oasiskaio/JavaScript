//              -5       -4       -3         -2        -1
//               0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'kaio']
// nomes.splice(indice, delete, elem1, elem2, ....);
// inves de retornar um elem igual pop e shift, ela rotorna um array

/* const removidos = nomes.splice(3, 2)
console.log(nomes, removidos)
*/

/*
const removido2 = nomes.splice(-3, Number.MAX_VALUE)
console.log(nomes, removido2)
*/

// A partir do indice 3 ele vai apagar 0 elementos e adicionara luiz ao indice 3
const removidos3 = nomes.splice(3, 0, 'kaio'); 
console.log(nomes, removidos3)