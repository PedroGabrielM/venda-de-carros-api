const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna as vendas'
    });
});

router.post('/', (req, res, next) => {
    const venda = {
        id_carro: req.body.id_carro
    }

    res.status(201).send({
        mensagem: 'Venda de carro criada'
    });
});

router.get('/:id_venda', (req, res, next) => {
    const id = req.params.id_venda

    if(id === 'especial'){
        res.status(200).send({
            mensagem: 'Descobriu id especial',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Passou Id'
        });
    }
    
});

router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Venda de carro alterada'
    });
});

router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Venda de carro deletada'
    });
});

module.exports = router;