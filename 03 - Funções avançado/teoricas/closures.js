// closures é a habilidade de uma função de acessar todo o campo lexico
// no caso da função retornada, ela tem acesso ao escopo global, da mae, e dela

function retornaFuncao(){
    const nome = "kaio"
    // essa função tem acesso ao escopo do pai dela(retornaFuncao)
    return function(){
        return nome
    };};
const funcao = retornaFuncao();
console.log(funcao)
