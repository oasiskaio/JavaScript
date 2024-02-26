require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose')

// A conexão só vai occorrer quando a conexão emitir o "pronto"
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => { 
    console.log('Conectei a base de dados')
    app.emit('pronto')
  })
  .catch(e => console.log(e))


const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require("./src/middlewares/middleware")



app.use( express.urlencoded( { extended: true } ));
app.use(express.static(path.resolve(__dirname, 'public')))

// ejs renderiza o o html contido no caminho absoluto do path(views).
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs');

//nossos proprios middleware
app.use(middlewareGlobal);

// usa tudo que foi declarado nas routes.js
app.use(routes)

// conexão a partir do pronto
app.on('pronto', () => {
    app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
    })
})

