const Comprador = require('../models/Comprador')

const index = (req, res, next) => {
    Comprador.find()
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
    let compradorId = req.body.compradorId
    Comprador.findById(compradorId)
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
    let comprador = new Comprador({
        nameComprador: req.body.nameComprador,
        emailComprador:req.body.emailComprador,
        descricao:req.body.descricao 
    })
    comprador.save()
    .then(response  => {
        res.json({
            message: 'Comprador add!'
        })
    })
    .catch(error => {
        res.json({
            message: 'Erro'
        })
    })
}

const update = (req, res, next) => {
    let compradorId = req.body.compradorId

    let updateData = {
        nameComprador: req.body.nameComprador,
        emailComprador:req.body.emailComprador,
        descricao:req.body.descricao
    }

    Comprador.findByIdAndUpdate(compradorId, {$set: updateData})
    .then(() => {
        res.json({
            message: 'Comprador update'
        })
    })
    .catch(error => {
        res.json({
            message: 'erro'
        })
    })
}

const destroy = (req, res, next)=> {
    let compradorId = req.body.compradorId
    Comprador.findByAndRemove(compradorId)
    .then(() => {
        req.json({
            message: 'Comprador deleted'
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