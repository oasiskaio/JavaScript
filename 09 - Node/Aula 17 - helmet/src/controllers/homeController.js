exports.paginaInicial = (req, res, next ) => {
    res.render('index',{
        titulo: 'Um titulo <span style="color:red;">renderizada</span> no ejs',
        numeros: [1, 45, 6, 34, 5, 2, 3]
    });
    return;
}

exports.trataPost = (req, res, next) => {
    res.send(req.body);
}