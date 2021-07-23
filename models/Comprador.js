const mongoose = require('mongoose')
const Schema = mongoose.Schema

const compradorSchema = new Schema ({
    nameComprador: {
        type: String
    },
    emailComprador: {
        type: String
    },
    descricao: {
        type: String
    }
})

const Comprador = mongoose.model('Comprador', compradorSchema)
module.exports = Comprador