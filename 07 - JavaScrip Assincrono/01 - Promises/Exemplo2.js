let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if(a != 2 ) reject('Falhou');
     
    resolve('Sucesso meu mano')
})

p.then((mensagem) => {
    console.log('o resultado foi ' + mensagem)
}).catch((err) => {
    console.log('o resultado foi ' + err)
})

/*  
    if(a == 2){
        resolve("Sucesso")
    }
    else{
        reject('falhou')
    }
 */