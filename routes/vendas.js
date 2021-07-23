const express = require('express')
const router = express.Router()

const VendaController = require('../controllers/VendaController')

router.get('/', VendaController.index)
router.post('/show', VendaController.show)
router.post('/store', VendaController.store)
router.post('/update', VendaController.update)
router.post('/delete', VendaController.destroy)

module.exports = router