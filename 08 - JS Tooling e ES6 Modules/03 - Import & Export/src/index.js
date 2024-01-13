// import * as MeuModolo from './modulo1'  =>   importa tudo que foi exportado de uma vez
import { nome as nome2, sobrenome, idade, soma, Pessoa } from './modulo1'
import Qualquernome from './modulo1';

console.log(nome2, sobrenome, idade);

console.log(Qualquernome(23, 3))
const p1 = new Pessoa('testePessoa', 'PessoaSobrenome')
console.log(p1)

