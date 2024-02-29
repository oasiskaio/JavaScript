exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = "Esta é o valor da variavel local"
    next()
};