// essas funções são exportadas para serem usadas nas rotas quando necessario

// função que trata o get do controlador da pagina inicial
exports.paginaInicial = (req, res, next ) => {
    res.render('index');
    return;
}

// função que trata o post do controlador da pagina inicial
exports.trataPost = (req, res, next) => {
    res.send(req.body);
}