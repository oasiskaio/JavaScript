// 705.484.450-52  070.987.720-03
/* 
 7x  0x  5x  4x  8x  4x  4x  5x  0x
 10  9   8   7   6   5   4   3   2
= x   x   x   x   x   x   x   x   x


*/

let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '')
let cpfArray = Array.from(cpfLimpo)
let cpf_cortado = cpfArray.slice(0, 9)


function* geradora1(){
    let i = 10
    while(true){
        yield i;
        i--;
    }};
function* geradora2(){
        let i = 11
        while(true){
            yield i;
            i--;
        }};
const g2 = geradora1()
const g3 = geradora2()

const PrimeiraFase = cpf_cortado.reduce((acumulador, valor) => {
    let i = g2.next().value
    acumulador += (Number(valor) * i)
    return acumulador
}, 0)
const SegundaFase = cpfArray.reduce((acumulador, valor) => {
    let i = g3.next().value
    acumulador += (Number(valor) * i)
    return acumulador
}, 0)
function digito(acumulador){
   const resultado = Number(11 - (acumulador % 11))
   if(Number(resultado) <= 9){
    return resultado
   } 
   else{
    return 0
   }
}

console.log(digito(PrimeiraFase))
console.log(digito(SegundaFase))
digito(SegundaFase)

console.log(SegundaFase)
