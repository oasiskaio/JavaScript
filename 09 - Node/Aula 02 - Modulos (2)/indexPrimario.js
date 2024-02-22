const { nome } = require("../Aula 01 - Node Modules");

module.exports = class Cachorro {
    constructor(test){
        this.nome = test;
    }
    latir() {
        console.log(this.nome)
        console.log(`${this.nome} está fazendo au au`)
    }
};