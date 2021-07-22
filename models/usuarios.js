const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema ({
    email: {
        type: String
    },
    pass: {
        type: String
    }
});

const Usuarios = mongoose.model('Usuarios', usuarioSchema)
module.exports = Usuarios