// For classico - geralmente com iteraveis(array ou strings)
// For in - Retorna o indice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteraveis, arrays ou strings)

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par)
}

const frutas = ['maçã', 'Pera', 'uva'];
for (let i = 0; i < frutas.length; i++){
    console.log(`indice ${i}` ,frutas[i])
}
