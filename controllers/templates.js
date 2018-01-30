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
        Model.generateZip(req.params.id)
            .then(zipObject => {
                res.set('Content-disposition', 'attachment; filename=test.zip')
                res.set('Content-Type', 'application/zip')

                let stream = zipObject.generateNodeStream().pipe(res).on('end', res.end)
            })
    }
}

module.exports = TemplatesController