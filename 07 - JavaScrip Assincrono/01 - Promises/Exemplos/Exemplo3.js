const betterGame = 'rd2'

// Função mutavel para Promise
function whoIsBetterGame(){
    return new Promise((resolve, reject) => {
        if(betterGame != 'rd2' && betterGame != 're4'){
        reject({
            nome: "ta maluco meu mano,",
            message: " Escolhe dnv ai"
        })
   }else {
        resolve({
            nome: betterGame,
            message: " ,escolheu bem"
        })
   }
})
    
}
whoIsBetterGame()
.then((result) => {
    console.log(result.nome + "?" + result.message)
})
.catch((erro) => {
    console.log(erro.nome + erro.message )
}
)