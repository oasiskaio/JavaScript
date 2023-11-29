//  ...rest,   ... spread

//               0  1  2  3  4  5  6  7  8
const numeros = [133, 2333, 333, 433, 533, 633, 733, 833, 933];
// constante recebendo um array com seus itens com os indices acima

const [primeiroNumero, segundoNumero, ...resto] = numeros;
//criará uma variavel com determinado item de numeros a partir da semelhança de indices
// ...resto é uma função do js que pega o resto não selecionado no array 
console.log(primeiroNumero, segundoNumero);
// mostrará a atribuiçãa do indice 0 e 1 do array numeros as variaveis
console.log(resto); 
// monstrará a função resto

const [um, ,  tres, , cinco,  , seis] = numeros;
// monstrará que tem como selecionar os itens do array a partir do vazio dps da virgula
console.log(um, tres, cinco, seis);

//                 0  1  2    0  1  2    0  1  2
const numeros2 =[ [1, 2, 4], [4, 5, 6], [7, 8, 9] ];
// variavel recebe um array com 3 arrays dentro
const [,  ,[, ,terceira]] = numeros2
// vai acessar o terceiro array e mostrar o terceiro elemento
console.log(terceira)
console.log(numeros2[2][2])
// monstrará o array de indice 2 e o elemento de indice 2

const[lista1, lista2, lista3] = numeros2
console.log(lista3[2])
// forma menos complexa de endereçar elemento e os acessar facilment
