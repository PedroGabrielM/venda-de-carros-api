const express =     require('express');
const mongoose =    require('mongoose');
const morgan =      require('morgan');
const bodyParse =   require('body-parser');

const usuarioRoute = require('./routes/usuarios')

mongoose.connect('mongodb://localhost:27017/venda-de-carros-db', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err);
});

db.once('open', () => {
    console.log('Database Conection Established');
});

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const rotaUsuarios = require('./routes/usuarios');
const rotaCarros = require('./routes/carros');
const rotaVendas = require('./routes/vendas');
const bodyParser = require('body-parser');

app.use('/usuarios', rotaUsuarios);
app.use('/carros', rotaCarros);
app.use('/vendas', rotaVendas);

app.use((req, res, next) => {
    res.header('Acces-Control-Allow-Origin', '*');
    res.header('Acces-Control-Allow-Header',
     'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if(res.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({})
    }

    next();
});

app.use((req, res, next) => {
    const error = new Error('Não encontrado');
    error.status(404);
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message 
        }
    });
});

module.exports = app;