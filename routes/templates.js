const router = require('express').Router()
const TemplatesController = require(`../controllers/templates.js`)
const AuthController = require(`../controllers/auth.js`)
const Keys = require('../required-fields.js')

router.get('/:id/zip', AuthController.verifyToken, TemplatesController.verifyOwnership, TemplatesController.sendZipFromDb)
router.post('/zip', AuthController.verifyToken, TemplatesController.sendZip)
router.post('/', AuthController.verifyToken, TemplatesController.postTemplate)
router.get('/:id', AuthController.verifyToken, TemplatesController.one)
router.patch('/:id', AuthController.verifyToken, TemplatesController.verifyOwnership, TemplatesController.update)
router.delete('/:id', AuthController.verifyToken, TemplatesController.verifyOwnership, TemplatesController.delete)

module.exports = router;