const express =     require('express')
const mongoose =    require('mongoose')
const morgan =      require('morgan')
const bodyParse =   require('body-parser')

const rotaUsuarios = require('./routes/usuarios')
const rotaCarros = require('./routes/carros')
const rotaVendas = require('./routes/vendas')
const rotaVendedor = require('./routes/vendedor')
const rotaComprador = require('./routes/comprador')

mongoose.connect('mongodb://localhost:27017/venda-de-carros-db', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Conection Established')
})

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/usuarios', rotaUsuarios)
app.use('/carros', rotaCarros)
app.use('/vendas', rotaVendas)
app.use('/vendedor', rotaVendedor)
app.use('/comprador', rotaComprador)

app.use((req, res, next) => {
    const error = new Error('Não encontrado')
    error.status(404)
    next(erro)
});

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.message 
        }
    });
});

module.exports = app