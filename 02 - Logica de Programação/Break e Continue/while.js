const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let i = 0
while(i < numeros.length) {
    let numero = numeros[i]
    if(numero === 2)
{
    console.log("pulei o numero 2( pula para proxima iteração )");
    i++;
    continue;
}
     console.log(numero)
    if(numero === 7){
        console.log("7 encontrado e acaba o lanço");
        i++
        break;
    }
  i++
}