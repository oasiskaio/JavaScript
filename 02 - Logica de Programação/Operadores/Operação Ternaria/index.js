// {condição} ? "Valor para verdadeiro" : "Valor para falso"
const pontuacaoUSuario = 2000;
const nivelUsuario = pontuacaoUSuario >= 1000 ? "usuario Vip" : "Usuario normal";

const corUsuario = null;
const corPadrao = corUsuario || "Preto"

const pessoa = {
    classe: "normal",
    salario: null
}


const renda = pessoa.classe == "normal" ? pessoa.salario = 1000: pessoa.salario = 2000;
console.log(nivelUsuario, corPadrao, pessoa.salario,)