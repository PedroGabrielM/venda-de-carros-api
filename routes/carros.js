const express = require('express')
const router = express.Router()

const CarroController = require('../controllers/CarroController')

router.get('/', CarroController.index)
router.post('/show', CarroController.show)
router.post('/store', CarroController.store)
router.post('/update', CarroController.update)
router.post('/delete', CarroController.destroy)

module.exports = router