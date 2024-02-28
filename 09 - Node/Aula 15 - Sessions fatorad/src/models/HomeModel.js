const mongoose = require('mongoose')

// novo esquema mongoose
// com a configuração dos dados que queremos
// moongose nao ta nem ai como mandamos os dados, cabe a nos tratar
const HomeSchema = new mongoose.Schema({
    titulo: { type: String, require: true},
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);
module.exports = HomeModel;