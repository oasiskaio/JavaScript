exports.index = (req, res, next ) => {
    if(req.session.user) return res.render('login_logado');
    res.render('index');
    return;
}