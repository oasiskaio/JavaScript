/*
function criaPessoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
const pessoal =   criaPessoa('kaio', 'xavier', 19)
console.log(pessoal.nome)  */


const pessoa1 = {
    nome:'Kaio', sobrenome:'xavier',  idade:19,
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi..}`)
        console.log(`A minha idade atual é ${this.idade}`)
    },
    incrementaIdade()  {
        this.idade++;
    }
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();