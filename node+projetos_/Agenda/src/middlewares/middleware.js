// middlewares são funçõs que tem acesso ao objeto req res e next
exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next()
};

exports.checkCsrfError = (err, req, res, next) => {
    if(err) {
      return res.render("includes/404");
    }
    next()
}
// Essa variavel vai estar diponivel dentro de todas as views
exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next()
}