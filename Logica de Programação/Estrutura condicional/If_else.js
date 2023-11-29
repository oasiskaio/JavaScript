const hora = 18;

if (hora <= 12) {
    console.log("Bom dia")
} else if(hora < 18) {
    console.log("boa tarde")
} else {
    console.log("boa noite")
}

if (hora >= 0 && hora <= 12){
    console.log("Bom dia")
} else if (hora >= 12 && hora < 18) {
    console.log("Boa tarde")
}else {
    console.log("Boa noite")
}


const tenhoGrana = true;
if (tenhoGrana) {
    console.log("Vou sair de casa")
} else {
   console.log("Não vouu sair de casa")
}