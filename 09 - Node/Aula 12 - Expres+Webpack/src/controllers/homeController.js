// essas funções são exportadas para serem usadas nas rotas quando necessario

// função que trata o get do controlador da pagina inicial
exports.paginaInicial = (req, res) => {
    res.render('index');
}

// função que trata o post do controlador da pagina inicial
exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST.');
}