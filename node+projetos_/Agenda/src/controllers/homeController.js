const Contato = require('../models/ContatoModel');

exports.index = async(req, res ) => { 
    if(req.session.user){
        const contatos = await Contato.buscaContatos()
        res.render('login_logado', { contatos });
    }else {
        return res.render('inicial')
    }
}