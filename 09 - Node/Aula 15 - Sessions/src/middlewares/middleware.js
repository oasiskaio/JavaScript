exports.middlewareGlobal = (req, res, next) => {
    if(req.body.cliente) {
    console.log(`O que voce postou foi: ${req.body.cliente}`);
    };
    next()
};