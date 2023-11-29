try {
   // È executada quando não há erros
}catch(err) {
   // È executada quando há erros
} finally {
    // Será executado sempre
    // usado em alguns momentos
}

try {
    // console.log(a);
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    try{
        console.log(a)
    }catch(error){
        console.log("Deu Erro aqui")
    }
    console.log('Fechei o arquivo')
} catch(err){
    console.log("tratando o erro")
} finally {
    console.log("FINNALY: Eu sempre sou executado")
}