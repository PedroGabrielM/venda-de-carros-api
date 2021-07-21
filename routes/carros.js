const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os carros'
    });
});

router.post('/', (req, res, next) => {
    const carro = {
        marca: req.body.marca,
        modelo: req.body.modelo,
        versao: req.body.versao,
        ano: req.body.ano,
        quilom: req.body.quilom,
        cambio: req.body.cambio,
        preco: req.body.preco
    }

    res.status(201).send({
        mensagem: 'Insere um novo carro',
        carroCriado: carro
    });
});

router.get('/:id_carro', (req, res, next) => {
    const id = req.params.id_carro

    if(id === 'especial'){
        res.status(200).send({
            mensagem: 'GET especial',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Passou Id'
        });
    }
    
});

router.patch('/', (req, res, nexts) => {
    res.status(201).send({
        mensagem: 'Carro alterado'
    });
});

router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Carro deletado'
    });
});

module.exports = router;