const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vendaSchema = new Schema ({
    nomeVendedor: {
        type: String
    },
    emailVendedor: {
        type: String
    },
    carro_carroId: {
        type: String
    }
});

const Vendas = mongoose.model('Vendas', vendaSchema)
module.exports = Vendas