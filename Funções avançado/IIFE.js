// IIFE -> Immediately invoked function expresssion (function(){})
// as variaveis do escopo global nao altera os dados da função anonima
(function(){
    const nome = "Kaio"
})();
const nome = "nnnn"


(function(idade, peso, altura){
    console.log(idade, peso, altura)
})(19, 80, 1,80);