// usado para trabalhar nas rotas do servidor
// npm i ejs
const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');

app.use( express.urlencoded( { extended: true } ));

app.use(express.static(path.resolve(__dirname, 'public')))

// ejs renderiza o o html contido no caminho absoluto do path(views).
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs');

// usa tudo que foi declarado nas routes.js
app.use(routes)

app.listen(4000, () => {
    console.log('Acessar http://localhost:4000')
    console.log('Servidor executando na porta 3000')
})
