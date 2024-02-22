const express = require('express');
const route = express.Router();
// Pega as funções do controlador de rota da home
const homeController = require('./src/controllers/homeController')
// Pega as funções do controlador de rota de contatos
const contatoController = require('./src/controllers/contatoController')


// Decide como usar as rotas que foram exportadas
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost)

// Rotas de contato
route.get('/contatos', contatoController.paginaInicial)

module.exports = route