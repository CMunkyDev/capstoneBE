const Controller = require('./controller.js')('templates')
const Model = require(`../models/templates.js`)

class TemplatesController extends Controller {
    static postTemplate (req, res, next) {
        req.body.owner_id = req.token.id
        Model.create(req.body)
        .then(row => {
            res.json(row)
        })
    }

    static sendZip (req, res, next) {
        let zipObject = Model.generateZip(req.body.template_object)
        res.set('Content-disposition', 'attachment; filename=snapi.zip')
        res.set('Content-Type', 'application/zip')

        zipObject.generateNodeStream().pipe(res).on('end', res.end)
    }

    static sendZipFromDb (req, res, next) {
        Model.getTemplateObject(req.params.id)
        .then(template => {
            let zipObject = Model.generateZip(template.template_object)

            res.set('Content-disposition', 'attachment; filename=snapi.zip')
            res.set('Content-Type', 'application/zip')

            zipObject.generateNodeStream().pipe(res).on('end', res.end)
        })
    }

    static verifyOwnership (req, res, next) {
        Model.getOwnerId(req.params.id).then(ownerId => {
            if (ownerId != req.token.id) {
                return next({ status: 403, message: 'Current user is not the owner of the requested resource' })
            } else {
                return next()
            }
        })
    }
} 

module.exports = TemplatesController