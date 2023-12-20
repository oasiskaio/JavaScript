/*
  JavaScript é baseado em prototipos para passar propriedades e metodos de um 
objeto para outro

DEFINIÇãO DE PROTOTIPO
  Prototipo é o termo usado para se referir ao que foi criado pela primeira vez,
servindo como modelo ou molde para futura produções.
  Todos os objetos tem uma referencia interna para um prototipo (_proto_) que vem
  da prorpriedade prototype da função construtora que foi usada para cria-los. 
  Quando tentamos acessar um membro de um objeto, primeiro o moto do JS vai tentar
  encontrar este membro no proprio objeto e depois da cadeia de prototipos é usada
  ate o topo (null) ate encontrar (ou não) tal membro.
*/

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => "Original" + this.nome + ' ' + this.sobrenome // Metodo da classe
}
Pessoa.prototype.nomeCompleto = () => {
    return this.nome + ' ' + this.sobrenome;
}

// Instância
const pessoa1 = new Pessoa('Kaio', 'Xavier'); // <- Pessoa = Função construtora
const data = new Date() // <- Pessoa = Função construtora

console.dir(pessoa1);
console.dir(data);