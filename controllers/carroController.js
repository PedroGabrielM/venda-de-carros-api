const Carros = require('../models/Carros')
const db = require('../app')

const index = (req, res, next) => {
    Carros.find()
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
    let carroId = req.body.carroId
    Carros.findById(carroId)
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

    let carro = new Carros({
        marca: req.body.nome,
        model: req.body.email,
        versao: req.body.versao,
        ano: req.body.ano,
        quilom: req.body.quilom,
        cambio: req.body.cambio,
        preco: req.body.preco
    })
    usuario.save()
    .then(response  => {
        res.json({
            message: 'Carro add!'
        })
    })
    .catch(error => {
        res.json({
            message: 'Erro'
        })
    })
}

const update = (req, res, next) => {
    let carroId = req.body.carroId

    let updateData = {
        marca: req.body.nome,
        model: req.body.email,
        versao: req.body.versao,
        ano: req.body.ano,
        quilom: req.body.quilom,
        cambio: req.body.cambio,
        preco: req.body.preco
    }

    Carros.findByIdAndUpdate(carroId, {$set: updateData})
    .then(() => {
        res.json({
            message: 'Carro update'
        })
    })
    .catch(error => {
        res.json({
            message: 'erro'
        })
    })
}

const destroy = (req, res, next)=> {
    let carroId = req.body.carroId
    Carros.findByAndRemove(carroId)
    .then(() => {
        req.json({
            message: 'Carro deleted'
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