/* 
Tente(try) executar esse codigo, caso ocorra erro
cairá no bloco catch
*/
let VarivavelnaoExiste = 'ola'
try {
    console.log(VarivavelnaoExiste)
} catch(err) {
    console.log("não existe essa variavel")
    console.log(err)
}

function soma(x, y) {
    if(
        typeof x !== 'number' ||
        typeof y !== 'number'){
   throw new error("x e y precisam ser números.")
    }
    return x + y
}
try{
console.log(soma(1, 3))
console.log(soma(1, "tres"))
}catch(error) {
    console.log(error)
}