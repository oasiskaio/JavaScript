 const mod1 = require('./index');
// const { nome, sobrenome, falaNome } = require('index.js')
console.log(mod1)
console.log(mod1.falaNome())
console.log(mod1.sobrenome)


class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}
exports.Pessoa = Pessoa;