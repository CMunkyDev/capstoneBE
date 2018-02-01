const Controller = require('./controller.js')('templates')
const Model = require(`../models/templates.js`)

class TemplatesController extends Controller {
    static postTemplate (req, res, next) {
        Model.create({owner_id: req.token.id, template_object: req.body})
        .then(row => {
            res.json(row)
        })
    }

    static sendZip (req, res, next) {
        Model.getTemplateObject(req.params.id)
        .then(template => {
            return Model.generateZip(template)
        })
        .then(zipObject => {
            res.set('Content-disposition', 'attachment; filename=test.zip')
            res.set('Content-Type', 'application/zip')

            zipObject.generateNodeStream().pipe(res).on('end', res.end)
        })
    }

    static verifyOwnership (req, res, next) {
        Model.getOwnerId(req.params.id).then(ownerId => {
            console.log(typeof req.token.id)
            console.log(typeof ownerId)
            if (ownerId != req.token.id) {
                return next({ status: 403, message: 'Current user is not the owner of the requested resource' })
            } else {
                return next()
            }
        })
    }
} 

module.exports = TemplatesController