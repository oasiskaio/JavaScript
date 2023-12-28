const falar = {  // criando uma função que pode ser usado como metodo de prototype
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};
const comer = {  // criando uma função que pode ser usado como metodo de prototype
  comer() {
    console.log(`${this.nome} está comendo.`);
  },
};
const beber = {  // criando uma função que pode ser usado como metodo de prototype
  beber() {
    console.log(`${this.nome} está bebendo.`);
  },
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);
function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  });
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Maria', 'A.');
console.log(p2.falar());
