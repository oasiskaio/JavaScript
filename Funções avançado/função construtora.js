 // esta função cria
 // Construtora -> Pessoa (new)

 function Pessoa(nome, sobrenome){
    // atributos privados
    // este metedo só poderá ser usado dentro da função 
    const ID = 12345; 
    const metodoInterno = function(){

    }; 

    // Atributos ou metodos publicos, por causa de "this" apontando
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + "Sou um método")
    }
 }

const p1 = new Pessoa("Kaio", "Xavier");
const p2 = new Pessoa("julia", "oliveira");
// é como se falasse pessoa.nome = 
console.log(p1.nome)
console.log(p2.sobrenome)
p1.metodo();