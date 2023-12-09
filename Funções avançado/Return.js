/* document.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red'
}); */

/* 
###############################################
*/

function criaPessoa(nome, sobrenome){
    return {nome: nome, sobrenome: sobrenome}
};
p1 = criaPessoa("kaio", "Xavier")
console.log(p1)
p1_resumo = {nome: "qualquer", sobrenome: "qualquer"} /* a função acima é usada para criar isso */

/* 
###############################################
*/
function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    };
    return falaResto
};
const fala = falaFrase('Olá');
const resto = fala('mundoooo!');
console.log(resto)

/* 
###############################################
*/

function criaMultiplicador(multiplicador){
    return function(n){
       return multiplicador * n
    }
}
const duplica = criaMultiplicador(2)
console.log(duplica(2))
const triplica = criaMultiplicador(3)
console.log(triplica(2))
const quadriplica = criaMultiplicador(4)
console.log(quadriplica(2))





