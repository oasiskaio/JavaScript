const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let numero of numeros) {
    if(numero === 2)
{
    console.log("pulei o numero 2( pula para proxima iteração )")
    continue
}

    if(numero === 7){
        console.log("7 encontrado e acaba o lanço")
        break;
    }
   console.log(numero)
}