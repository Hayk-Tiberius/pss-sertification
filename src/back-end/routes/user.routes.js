const Router = require('express')
const router = new Router()
const UseController = require("../controller/user.controller")
const userController = require('../controller/user.controller')

router.post('/user', userController.createUser)
router.get('/user', userController.getUser)
router.get('/user/:id', userController.getOneUser)
router.put('/user', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)


module.exports = router