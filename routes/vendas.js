const express = require('express');
const router = express.Router();

const vendaController = require('../controllers/vendaController')

router.get('/', vendaController.index)
router.post('/show', vendaController.show)
router.post('/store', vendaController.store)
router.post('/update', vendaController.update)
router.post('/delete', vendaController.destroy)

module.exports = router;