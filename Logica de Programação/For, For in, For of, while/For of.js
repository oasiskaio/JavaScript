const nome = ['kaio', 'Xavier', 'Da silva']
for (let i in nome){
    console.log(nome[i])
}
console.log('#####')

for (let valor of nome) {
    console.log(valor)
}

nome.forEach(function(valor, indice){
    console.log(valor, indice)
})