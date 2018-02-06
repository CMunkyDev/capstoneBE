const Controller = require('./controller.js')('users')
const Model = require(`../models/users.js`)
const TemplateModel = require('../models/users.js')
const encryption = require('../encryption.js')
const jwt = require('jsonwebtoken')


class UsersController extends Controller {
    static create(req, res, next) {
        encryption.promiseHash(req.body.password).then(hashedPass => {
            req.body.password = hashedPass
            super.create(req, res, next)
        })
    }

    static getTemplatesByUser(req, res, next) {
        Model.allMatchingFrom('templates','owner_id', req.params.id).then(templates => {
            res.json({
                userType: res.userType,
                templates: templates
            })
        })
    }

    static show(req, res, next) {
        if (res.userType === 'admin') {
            Model.oneAdmin(req.params.id).then(response => {
                res.json({
                    userType: res.userType,
                    users: response
                })
            })
        } else if (res.userType === 'user' || res.userType === 'guest') {
            Model.oneSafe(req.params.id).then(response => {
                res.json({
                    userType: res.userType,
                    users: response
                })
            })
        } else {
            next({ status: 401, message: 'Unidentified userType' })
        }
    }
}

module.exports = UsersController