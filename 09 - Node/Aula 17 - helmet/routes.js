const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')

// Decide como usar as rotas que foram exportadas
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost)


module.exports = route