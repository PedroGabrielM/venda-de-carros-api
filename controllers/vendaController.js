const Vendas = require('../models/Vendas')

const index = (req, res, next) => {
    Vendas.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'Erro'
        })
    })
}  
    
const show = (req, res, next) => {
    let vendasId = req.body.vendasId
    Vendas.findById(vendasId)
    .then(response => {
        res.josn({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'Erro'
        })
    })
}

const store = (req, res, next) => {
    let venda = new Vendas({
        nomeVenda: req.body.nomeVenda,
        emailVendedor:req.body.emailVendedor,
        carro_carroId: req.body.carro_carroId 
    })
    venda.save()
    .then(response  => {
        res.json({
            message: 'Venda add!'
        })
    })
    .catch(error => {
        res.json({
            message: 'Erro'
        })
    })
}

const update = (req, res, next) => {
    let vendasId = req.body.vendasId

    let updateData = {
        nomeVenda: req.body.nomeVenda,
        emailVendedor:req.body.emailVendedor,
        carro_carroId: req.body.carro_carroId 
    }

    Vendas.findByIdAndUpdate(usuarioId, {$set: updateData})
    .then(() => {
        res.json({
            message: 'Venda update'
        })
    })
    .catch(error => {
        res.json({
            message: 'erro'
        })
    })
}

const destroy = (req, res, next)=> {
    let vendasId = req.body.vendasId
    Vendas.findByAndRemove(vendasId)
    .then(() => {
        req.json({
            message: 'Venda deleted'
        })
    })
    .catch(error => {
        req.json({
            message: 'Erro'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}