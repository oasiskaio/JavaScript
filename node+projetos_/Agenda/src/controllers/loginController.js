const Login = require('../models/LoginModel');

exports.index = (req, res, next) => {
    if(req.session.user) return res.render('login-logado')
    return res.render('login');
}

exports.register = async function(req, res){
     try{
        const login = new Login(req.body)
        await login.register();
        if(login.errors.length > 0){
                req.flash('erros', login.errors);
                req.session.save(function(){
                   return res.redirect('back');
                });
                return;
            }
        req.flash('success', 'Usuário criado com sucesso.');
        req.session.save(function(){
            return res.redirect('back');
        });
        return res.send(login.user);

    }catch(e){
        console.log(e)
        return res.render('includes/404')
    }
    

    
}


exports.login = async function(req, res){
    try{
       const login = new Login(req.body)
       await login.login();
       if(login.errors.length > 0){
               req.flash('erros', login.errors);
               req.session.save(function(){
                  return res.redirect('back');
               });
               return;
           }
       req.flash('success', 'Você entrou no sistema');
       req.session.user = login.user
       req.session.save(function(){
           return res.redirect('back');
       });
       return res.send(login.user);

   }catch(e){
       console.log(e)
       return res.render('includes/404')
   }
}

exports.logout = function(req, res) {
   req.session.destrou();
   res.redirect('/')
}