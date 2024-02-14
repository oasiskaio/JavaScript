// usado para trabalhar nas rotas do servidor
const express = require('express');
const app = express();

//          criar   let   atualizar  apagar
// CRUD ->  CREATE, READ,  UPDATE,   DELETE
//          POST   GET     UT       DELETE

// http://meusite.com/ <- GET -> Entregue a página


// req => requisição feita,    res => o que eu vou mandar pro servidor
app.get('/', (req, res) => {
     res.send(`
     <form action="/" method="POST">
     Nome: <input type="text" name="nome">
     <button>Enviar</button>
     </form>
     `);
});
app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.')
});
app.listen(4000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})
