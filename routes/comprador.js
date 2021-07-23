const express = require('express')
const router = express.Router()

const CompradorController = require('../controllers/CompradorController')

router.get('/', CompradorController.index)
router.post('/show', CompradorController.show)
router.post('/store', CompradorController.store)
router.post('/update', CompradorController.update)
router.post('/delete', CompradorController.destroy)

module.exports = router