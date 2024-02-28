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
  .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require("./src/middlewares/middleware")


app.use( express.urlencoded( { extended: true } ));
app.use(express.static(path.resolve(__dirname, 'public')))

//configurando a sessão que vai ser usada
const sessionOptions = session({
  secret: 'testeClienteConexao',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING}),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
})
// Usa as opções de sessao que foram criadas
// cria mensagens rapidas para serem mostradas ao usuario sem quebra na memoria
app.use(sessionOptions)
app.use(flash(

))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs');

app.use(middlewareGlobal);

app.use(routes)

// conexão a partir do pronto
app.on('pronto', () => {
    app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
    })
})

