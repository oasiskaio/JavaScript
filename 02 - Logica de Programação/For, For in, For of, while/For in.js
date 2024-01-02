// For in -> le os indices ou as chaves dos objetos //
const frutas = ['pera', 'maça', 'uva']
for (let indice in frutas){
    console.log(frutas[indice])
}

const pessoa = {
    nome: 'kaio',
    sobrenome: 'Xavier',
    idade: 19}
    for(let chaves in pessoa){
        console.log(chaves);}
    
    for(let chave in pessoa){
        console.log(chave, pessoa[chave])
    }







    console.log(pessoa.nome)     //
    console.log(pessoa['nome'])  //
    const nn = pessoa.nome       //
    console.log(nn)
