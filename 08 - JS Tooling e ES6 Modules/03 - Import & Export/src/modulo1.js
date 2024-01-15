import { construct } from "core-js/fn/reflect";

export const nome = "kaio";
const sobrenome = "xavier";
const idade = 19;
export default function soma(x, y) {
    return x + y;
}

export {sobrenome, idade};

export class Pessoa {
    constructor( nomezao, empresa ){
      this.nome3 = nomezao;
      this.sobrenome3 = empresa;  
    }
}