const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController')

router.get('/', usuarioController.index)
router.post('/show', usuarioController.show)
router.post('/store', usuarioController.store)
router.post('/update', usuarioController.update)
router.post('/delete', usuarioController.destroy)

module.exports = router;