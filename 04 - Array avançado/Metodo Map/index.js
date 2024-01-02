// Sempre retorna a mesma quantidade de elementos do array ou menos
// pode-se modificar elementos do array
// quando mexemos com um array de objetos e fazemos modificações estamos mexendo no array principal
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros.map((valor) => valor  * 2)
console.log(dobro)


const pessoas = [
    {nome: 'kaio', idade: 19},
    {nome: 'maria', idade: 23},
    {nome: 'eduardo', idade: 55},
    {nome: 'leticia', idade: 10},
    {nome: 'rosana', idade: 32},
    {nome: 'wallace', idade: 47}
];
// Retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map((valor) => {return valor.nome.toString()})
console.log(nomes)

// Remova apenas a chave "nome" do objeto
const idades = pessoas.map((valor) => ({idade: valor.idade}))
console.log(idades)

// adicione uma  chave id em cada objeto
const adicionaId = pessoas.map(function(valor, indice){
    const newObj = {...valor}
    newObj.id = (indice + 3)* 3
   return newObj
})
console.log(pessoas) // foi necessario criar outra constante com o array para n alterar
console.log(adicionaId)