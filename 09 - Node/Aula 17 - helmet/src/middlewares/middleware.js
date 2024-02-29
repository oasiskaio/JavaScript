exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = "Esta é o valor da variavel local"
    next()
};

exports.checkCsrfError = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code) {
      return res.render("include/404");
    }
}
// Essa variavel vai estar diponivel dentro de todas as views
exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next()
}