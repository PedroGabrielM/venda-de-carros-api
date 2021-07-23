const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vendedorSchema = new Schema ({
    nameVendedor: {
        type: String
    },
    emailVendedor: {
        type: String
    },
    descricao: {
        type: String
    },
    carro_carroId: {
        type: String
    }
})

const Vendedor = mongoose.model('Vendedor', vendedorSchema)
module.exports = Vendedor