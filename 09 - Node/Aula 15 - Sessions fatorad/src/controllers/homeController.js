exports.paginaInicial = (req, res, next ) => {
    req.session.usuario = { nome: 'Kaio', senha: 12345, logado: true}

    res.render('index');
    return;
}

exports.trataPost = (req, res, next) => {
    res.send(req.body);
}