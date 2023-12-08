const nome = "kaio"

function falaNome(){
    console.log(nome)
}

function usarFalaNome(){
    const nome = "Padrao"
    falaNome()
}
usarFalaNome()
usarFalaNome()

/* no campo lexico as funções conhecem seus vizinhos, então manterá o valor
dos vizinhos perto de fala nome */