 // this vai ser sempre quem chamar o objeto
 
 function criaPessoa(nome, sobrenome, a, p){
    return {
        nome,
        sobrenome,
        fala(assunto = 'Não mandou o argumento'){
            return `${this.nome} está ${assunto}`
        },
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        // Sett
        set nomeCompleto(valor){
              valor = valor.split(' '); // a cada espaço o nome é dividido e retorna um array
              this.nome = valor.shift(); // retorna e remove o primeiro indice do array
              this.sobrenome = valor.join(' ');
              console.log(valor)
        },
        altura: a, 
        peso: p,
        // get(abreviação de getter) faz a função ser tratada como atributo do objeto
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }};
}
 const p1 = criaPessoa('Kaio', 'Xavier', 1.8, 80);
 console.log(p1.imc)
 const p2 = criaPessoa('julia', 'oliveira', 1.7, 60)
 console.log(p2.imc)
 console.log(p1.nomeCompleto)
 p1.nomeCompleto = 'Maria Oliveira Silva'
 console.log(p1.nome)
 console.log(p1.sobrenome)


 console.log(p1.fala("falando sobre js",));
 console.log(p1.nome)