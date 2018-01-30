const db = require('../database/connection.js')
const Model = require('./model.js')('templates')
const frankenserver = require('frankenserver')
class Templates extends Model {
    static generateZip (id) {
        return db('templates').select('template_object').where({ id }).first()
            .then(template => {
                if (!template) return next({status: 404, message: `Template with id of ${id} not found.`})
                let zipObject = frankenserver(template.template_object)
                return zipObject
            })
    }
}

module.exports = Templates