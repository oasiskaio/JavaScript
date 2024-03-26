const mongoose = require('mongoose')
const validator = require('validator')

const ContatoSchema = new mongoose.Schema({
    titulo: { type: String, require: true},
    descricao: String
});

const ContatoModel = mongoose.model('Home', ContatoSchema);

function Contato(body){
    this.body = body;
    this.errors = [];
    this.contato = null;
}

Contato.prototype.register = function(){
    this.valida()
}


Contato.prototype.valida = function(){
    this.cleanUp();
    if(!validator.isEmail(this.body.email)) this.errors.push('e-mail inválido')
    
  }
Contato.prototype.cleanUp = function(){
   for(const key in this.body){
       if(typeof this.body[key] !== 'string'){
           this.body[key] = '';
       }
   } 
   this.body = {
       email: this.body.email,
       password: this.body.password
   }
}



module.exports = ContatoModel;