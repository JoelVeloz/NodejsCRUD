const express = require('express')
const router = express.Router()
const controller = require('../controllers/items')

/**
 *  Ruta /user GET
 */
router.get('/items', controller.getData

)
module.exports = router