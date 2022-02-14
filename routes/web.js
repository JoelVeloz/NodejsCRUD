const express = require('express')
const conexion = require('../database/db')
const UserController = require('../controllers/UserController')
const AppController = require('../controllers/AppController')
const router = express.Router()



router.get('/', AppController.index)


router.get('/users', UserController.index)
router.get('/create', UserController.create)
router.post('/save', UserController.save)
router.get('/edit/:id', UserController.edit)
router.post('/update', UserController.update)
router.get('/delete/:id', UserController.delete)

module.exports = router