const router = require('express').Router()
const TemplatesController = require(`../controllers/templates.js`)
const AuthController = require(`../controllers/auth.js`)
const Keys = require('../required-fields.js')

router.get('/:id')
router.patch('/:id')
router.delete('/:id')

module.exports = router;