const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')

const LoginSchema = new mongoose.Schema({
    email: { type: String, require: true},
    password: {type: String, require: true}
});
const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
   constructor(body){
    this.body = body;
    this.errors = [];
    this.user = null;
   }
   async Login(){
    this.valida();
    if(this.errors.length > 0) return;
    this.user =  await LoginModel.findOne({ email: this.body.email})
 
    if(!this.user) {
        this.errors.push('Usuário não existe.')
    } 

    if(!bcryptjs.compareSync(this.body.password, this.user.password)){
        this.errors.push('Senha inválida');
        this.user = null
        return;
    }
   }

   async register(){
    this.valida();
    if(this.errors.length > 0) return;
    await this.userExists();
    if(this.errors.length > 0) return;

    const salt = bcryptjs.genSaltSync();
    this.body.password = bcryptjs.hashSync(this.body.password, salt)

    this.user = await LoginModel.create(this.body) 

}
   // Chega se o email já esta sendo usado na base de dados
   async userExists() {
     this.user =  await LoginModel.findOne({ email: this.body.email})
     if(this.user) this.errors.push('Este email já esta sendo utilizado')
   }
   valida(){
    // começça a validação já com os campos em strings
     this.cleanUp();
     // Se não for do tipo email, será lançado um novo erro com essa string
     if(!validator.isEmail(this.body.email)) this.errors.push('e-mail inválido')
     // Mesma logica do anterior
     if(this.body.password.length < 3 || this.body.password.length >= 50){
        this.errors.push('A senha precisa ter entre 3 e 50 caracteres')
     }
}
//  Este metodo passa por toda chave do objeto req e formata o que não é string
   cleanUp(){
    for(const key in this.body){
        if(typeof this.body[key] !== 'string'){
            this.body[key] = '';
        }
    } 
// Retorna os dados formatados
    this.body = {
        email: this.body.email,
        password: this.body.password
    }
   }

}

   

module.exports = Login;