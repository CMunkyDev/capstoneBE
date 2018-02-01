const db = require('../database/connection.js')
const Model = require('./model.js')('templates')
const frankenserver = require('frankenserver')

class Templates extends Model {
    static getTemplateObject (id) {
        return db('templates').select('template_object').where({ id }).first()
            .then(template => {
                if (!template) return next({ status: 404, message: `Template with id of ${id} not found.` })
                return template
            })
    }

    static generateZip (templateObject) {
        let zipObject = frankenserver(template.template_object)
        return zipObject
    }

    static getOwnerId (templateId) {
        return db('templates').select('owner_id').where({ id: templateId }).first()
            .then(({ owner_id: id }) => {
                return id
            })
    }
}

module.exports = Templates