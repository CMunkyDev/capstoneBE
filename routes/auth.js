const router = require('express').Router()
const UsersController = require(`../controllers/users.js`)
const AuthController = require(`../controllers/auth.js`)
const Keys = require('../required-fields.js')

router.post('/login', AuthController.verifyToken, AuthController.prune(Keys.loginPrune()), AuthController.complete(Keys.loginComplete()), AuthController.checkLogin, AuthController.sendToken)
router.get('/current', AuthController.verifyToken, AuthController.currentUser)
router.post('/signup', AuthController.verifyToken, AuthController.prune(Keys.postPrune('users')), AuthController.complete(Keys.postComplete('users')), AuthController.checkExistence, UsersController.create)

module.exports = router;