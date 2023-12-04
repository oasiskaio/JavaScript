function funcao(){
    console.log(arguments[3]);
}
funcao("valor", 1, 3, 4, 5, 6, 7, 8, 9);


// Argumentos que sustenta todos os argumentos enviados
function funcao2(a, b, c){
   let total = 0;
   for(argumento of arguments){
      total += argumento
   }
   console.log(total, a, b, c)
}
funcao2(1, 3, 4, 5, 6, 7, 8, 9);


// se eu não enviei o valor entao ele seta como padrao(undefined)
function funcao3(a, b, c, d, e, f){
    console.log(a, b, c, d, e, f)
};
funcao3(1, 2, 3);


// Retorna NaN porque 4 + undefined é invalido
// se eu nao enviar o b ele recebe o valor de 2
// Entre dois parametros, o b so poderá receber o valor de 2 se for mandado como undefined
function funcao4(a, b = 2, c = 4){
    console.log(a + b + c)
}
funcao4(4, undefined ,20)


// mandando parametros via desistruturação objeto
function funcao5({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)
}
funcao({nome: "kaio", sobrenome: "xavier", idade: 19})

// mandando parametros via desistruturação array
function funcao6([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3)
}
funcao(["kaio", "xavier", 19])


function Exemplo(operador, acumulador, ...numeros){
    for(let numero of numeros){
    if(operador == "+") { acumulador += numero }
    if(operador == "-") { acumulador -= numero }
    if(operador == "/") { acumulador /= numero }
    if(operador == "*") { acumulador *= numero }
}
console.log(acumulador)
}
Exemplo("+", 0, 30, 40, 60 , 70)