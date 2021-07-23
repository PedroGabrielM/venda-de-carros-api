const express = require('express')
const router = express.Router()

const VendedorController = require('../controllers/VendedorController')

router.get('/', VendedorController.index)
router.post('/show', VendedorController.show)
router.post('/store', VendedorController.store)
router.post('/update', VendedorController.update)
router.post('/delete', VendedorController.destroy)

module.exports = router