const Usuarios = require('../models/usuarios')

const index = (req, res, next) => {
    Usuarios.find()
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
    let usuarioId = req.body.usuarioId
    Usuarios.findById(usuarioId)
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
    let usuario = new Usuarios({
        nome: req.body.nome,
        email: req.body.email,
        pass: req.body.pass
    })
    usuario.save()
    .then(response  => {
        res.json({
            message: 'Usuario add!'
        })
    })
    .catch(error => {
        res.json({
            message: 'Erro'
        })
    })
}

const update = (req, res, next) => {
    let usuarioId = req.body.usuarioId

    let updateData = {
        nome: req.body.nome,
        email: req.body.email,
        pass: req.body.pass
    }

    Usuarios.findByIdAndUpdate(usuarioId, {$set: updateData})
    .then(() => {
        res.json({
            message: 'Usuasrio update'
        })
    })
    .catch(error => {
        res.json({
            message: 'erro'
        })
    })
}

const destroy = (req, res, next)=> {
    let usuarioId = req.body.usuarioId
    Usuarios.findByAndRemove(usuarioId)
    .then(() => {
        req.json({
            message: 'Usuario deleted'
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