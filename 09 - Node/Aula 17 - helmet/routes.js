const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')


// Decide como usar as rotas que foram exportadas
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost)

// Rotas de contato
route.get('/contatos', contatoController.paginaInicial)

module.exports = route