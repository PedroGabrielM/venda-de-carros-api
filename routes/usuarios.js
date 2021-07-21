const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os usuários'
    });
});

router.post('/', (req, res, next) => {
    const usuario = {
        email: req.body.email,
        senha: req.body.senha,
        ultimo_login: req.body.ultimo_login
    }
    res.status(201).send({
        mensagem: 'Usuário criado'
    });
});

router.get('/:id_usuario', (req, res, next) => {
    const id = req.params.id_usuario

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
        mensagem: 'Usuário alterado'
    });
});

router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usuário deletado'
    });
});

module.exports = router;