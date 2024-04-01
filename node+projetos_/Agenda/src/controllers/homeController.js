const Contato = require('../models/ContatoModel');

exports.index = async(req, res ) => {
//    
    const contatos = await Contato.buscaContatos()

    if(req.session.user) return res.render('login_logado', { contatos });
    console.log(contatos)
    res.render('index', { contatos });
}