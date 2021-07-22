const express = require('express');
const router = express.Router();

const carroController = require('../controllers/carroController')

router.get('/', carroController.index)
router.post('/show', carroController.show)
router.post('/store', carroController.store)
router.post('/update', carroController.update)
router.post('/delete', carroController.destroy)

module.exports = router;