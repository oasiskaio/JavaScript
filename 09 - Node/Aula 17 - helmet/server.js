require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app = express();

const mongoose = require('mongoose')
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');


mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => { 
    console.log('Conectei a base de dados')
    app.emit('pronto')
  })
  .catch(e => console.log(e));

const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require("./src/middlewares/middleware");

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

app.use( express.urlencoded( { extended: true } ));
app.use(helmet());
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))

app.use(sessionOptions)
app.use(flash(   ))
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs');

app.use(csrf());
app.use(middlewareGlobal);
app.use(csrfMiddleware)
app.use(checkCsrfError);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
    })
})

