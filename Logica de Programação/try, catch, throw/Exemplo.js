// se essa data não for uma instancia de date
// vai dar erro.
// se o valor mandado não for uma instacia de date
// se a data foi enviada e não é uma instancia de date
// se eu enviar uma data tem que ser uma instancia de date
function retornaHora(data) {
    if(data && !(data instanceof Date)){
       throw new TypeError("Esperando instância de date");
    }

    // se a data não foi enviada, data recebe new date
    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try{
  const data = new Date('01-01-1970 12:58:12');
  const hora = retornaHora(data);
  console.log(hora);
} catch(error){
    console.log(error)
    // tratar erro
} finally{
    console.log("tenha um bom dia")
}

