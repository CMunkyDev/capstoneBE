const router = require('express').Router()
const UsersController = require(`../controllers/users.js`)
const AuthController = require(`../controllers/auth.js`)
const Keys = require('../required-fields.js')

router.get('/:id/templates', AuthController.verifyToken)
router.get('/:id', AuthController.verifyToken)


module.exports = router;