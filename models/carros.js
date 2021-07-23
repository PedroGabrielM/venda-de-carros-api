const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carroSchema = new Schema ({
    marca: {
        type: String
    },
        
    model: {
        type: String
    },
    
    versao: {
        type: String
    },
        
    ano: {
        type: Date
    },
    
    quilom: {
        type: String
    },
    
    cambio: {
        type: String
    },
    
    preco: {
        type: String
    }

})

const Carros = mongoose.model('Carros', carroSchema)
module.exports = Carros