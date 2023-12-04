// Declaração de função (Function hoisting)
falaOi()
function falaOi(){
    console.log("Oi")
}
// First-Class objects (Objetos de primeira classe)
//variavel recebe uma função e passa a ser uma função
const souUmDado = function(){
    console.log("Sou um dado.");
}; 
souUmDado();

function executaFuncao(funcao){
    console.log("Vou executar sua função abaixo")
    funcao()
} 
executaFuncao(souUmDado);


// Arrow function
const funcaoArrow = () => { console.log("sou uma arrow function")}
funcaoArrow()

// Dentro de um objeto
const obj = {
    falar: function(){
        console.log("Estou falando...")
    }
};
obj.falar()