const express = require('express')
const router = express.Router()

const UsuarioController = require('../controllers/UsuarioController')

router.post('/register', UsuarioController.register)
router.post('/login', UsuarioController.login)

module.exports = router