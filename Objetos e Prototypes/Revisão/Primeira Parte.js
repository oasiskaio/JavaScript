const pessoa = {
    nome: 'kaio',
    sobrenome: 'xavier'
}
console.log(pessoa.nome)
console.log(pessoa["nome"])


const pessoa1 = new Object();
pessoa1.nome = 'Kaio';
pessoa1.sobrenome = 'Xavier';
pessoa1.idade = 30;

pessoa1.falarNome = function(){
   return (`${this.nome} está falando seu nome.`)
}
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
console.log(pessoa1.getDataNascimento())
console.log(pessoa1.falarNome())

for(chave in pessoa1){
    console.log(pessoa1[chave])
}