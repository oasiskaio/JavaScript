// Factory functions / Constructor functions / Classes

// Constructor functions
function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }};
}
const p1 = criaPessoa('Kaio', 'Xavier')
console.log(p1.nomeCompleto)


// Factory functions molde para criar objetos
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}
// {} <-this
const p2 = new Pessoa('Kaio', 'Xavier')
Object.freeze(p2);
p2.nome = 'outra coisa'
console.log(p2)