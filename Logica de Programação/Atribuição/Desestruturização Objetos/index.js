const pessoa = {
    nome: 'kaio',
    sobrenome: 'xavier',
    idade: '19',
    endereço: {
         rua: 'av Brasil',
         numero: 320
              }
};
// objeto pessoa com elementos com outro objeto dentro


// const nome = pessoa.nome
// console.log(nome)

//   Atribuição via desestruturização
 const {nome: teste = 'não existe', sobrenome, idade,
  endereço: {rua: r = 'não existe', numero},
  endereço } = pessoa
// variavel teste recebe o valor de nome e se nome não existe, mostrará vazio
//varivael r recebe o valor de rua e se não existe mostrará não existe


 console.log(teste, sobrenome)
 // mostrará a variavel atribuida a outro valor.
 console.log(r, numero)
 // mostrará outra variavel atribuida ao valor inicial
 console.log(endereço)
 // Mostrará a variavel que foi atribuida ao objeto inteiro, sem cortes apenas atribuição
 