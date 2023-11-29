//               01234567//  

let umaString = "Um texto"
console.log(umaString[6]) //monstra o conteudo do indice selecionado
console.log(umaString.charAt(6)) // faz a mesma coisa que a função anterior
console.log(umaString.concat("' ', 'Uma', 'chance'")) // um função para concatenção
console.log(umaString +" Em um lindo dia") // primeira forma de concatenação
console.log(`${umaString} Em um lindo dia`) // Segunda forma de concatenação



console.log(umaString.indexOf("texto")) // De onde começa o indice da palavra//
console.log(umaString.lastIndexOf("m", 3)) // começa de trás pra frente//
console.log(umaString.search(/x/)) //similar ao indexoff
console.log(umaString.replace(/Um/, "Outra")) //troca de palavras//



let UmaString = "O rato roeu a roupa do rei de roma"
console.log(UmaString.replace(/r/g, '#')) //vai trocar em todos os "R"
console.log(UmaString.length) //monstra o tamanho da sting começando do 0 até n
console.log(UmaString.slice(2, 6)) //pega o que esta dentro desses indices//
console.log(UmaString.split(' ', 3)) // mostra na tela as tres primeiras palavaras como espaçãmento
console.log(UmaString.toUpperCase) //tudo para maiusculo
console.log(UmaString.toLowerCase) // tudo para miniusculo
