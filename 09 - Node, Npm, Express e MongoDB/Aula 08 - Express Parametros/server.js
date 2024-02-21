// usado para trabalhar nas rotas do servidor
const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);
app.get('/', (req, res) => {
     res.send(`
     <form action="/" method="POST">
     Nome: <input type="text" name="nome">
     <button>Enviar</button>
     </form>
     `);
});
// Esse parametro que eu to enviando pode ou não ser recebido
app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
     console.log(req.params);
     console.log(req.query)
     res.send(req.params);
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.send(`O que voce mandou foi: ${req.body.nome}`)
})
app.listen(4000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})
