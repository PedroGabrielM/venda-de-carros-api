const Vendedor = require('../models/Vendedor')

const index = (req, res, next) => {
    Vendedor.find()
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
    let vendedorId = req.body.vendedorId
    Vendedor.findById(vendedorId)
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
    let vendedor = new Vendedor({
        nameVendedor: req.body.nomeVendedor,
        emailVendedor:req.body.emailVendedor,
        descricao:req.body.descricao,
        carro_carroId: req.body.carro_carroId 
    })
    vendedor.save()
    .then(response  => {
        res.json({
            message: 'Vendedor add!'
        })
    })
    .catch(error => {
        res.json({
            message: 'Erro'
        })
    })
}

const update = (req, res, next) => {
    let vendedorId = req.body.vendedorId

    let updateData = {
        nameVendedor: req.body.nomeVendedor,
        emailVendedor:req.body.emailVendedor,
        descricao:req.body.descricao,
        carro_carroId: req.body.carro_carroId 
    }

    Vendedor.findByIdAndUpdate(vendedorId, {$set: updateData})
    .then(() => {
        res.json({
            message: 'Vendedor update'
        })
    })
    .catch(error => {
        res.json({
            message: 'erro'
        })
    })
}

const destroy = (req, res, next)=> {
    let vendedorId = req.body.vendedorId
    Vendedor.findByAndRemove(vendedorId)
    .then(() => {
        req.json({
            message: 'Vendedor deleted'
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