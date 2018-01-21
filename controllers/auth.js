const Controller = require('./controller.js')('users')
const Model = require(`../models/users.js`)
const encryption = require('../encryption.js')
const jwt = require('jsonwebtoken')


class AuthController extends Controller {

    static checkLogin(req, res, next) {
        let pass = req.body.password
        let email = req.body.email
        Model.oneFromEmail(email).then(userObj => {
            if (!userObj) {
                return next({ status: 404, message: `User with email of ${email} not found.` })
            }
            req.userObj = userObj
            return encryption.promiseCompare(pass, userObj.password)
        }).catch(err => {
            return next({ status: 400, message: `Invalid password` })
        }).then(() => next())
    }

    static checkExistence(req, res, next) {
        let username = req.body.username
        let email = req.body.email
        Model.oneFromEmail(email).then(userObj => {
            if (userObj) {
                return next({ status: 409, message: `User with email ${email} already exists` })
            } else {
                return Model.oneFromUsername(username)
            }
        }).then(userObjectFromEmail => {
            if (userObjectFromEmail) {
                return next({ status: 409, message: `User ${username} already exists` })
            } else {
                console.log(`doesn't exist`);
                next()
            }
        })
    }

    static verifyToken(req, res, next) {
        let [bearer, token] = req.headers.auth ? req.headers.auth.split(' ') : [null, null]
        jwt.verify(token, process.env.TOKEN_SECRET, (err, vToken) => {
            if (err) {
                console.log('ERROR: ', err.message)
                req.token = null
            } else {
                req.token = vToken
            }
            AuthController.setUserType(req, res, next)
        })
    }

    static setUserType(req, res, next) {
        res.userType = req.token ? 'user' : 'guest'
        next()
    }

    static isUser(req, res, next) {
        if (res.userType === 'guest') {
            return next({ status: 401, message: 'Unauthorized' })
        } else {
            return next()
        }
    }

    static sendToken(req, res, next) {
        let payload = {
            id: req.userObj.id
        }
        let token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '99 years' })
        console.log('TOKEN: ', token)
        return res.json({ authorization: 'Bearer ' + token })
    }

    static currentUser(req, res, next) {
        if (req.token) {
            Model.oneSafe(req.token.id).then(userData => {
                userData.userType = res.userType
                res.json({ currentUser: userData })
            })
        } else {
            res.json({ currentUser: { id: null, first_name: 'guest', username: 'guest', userType: 'guest' } })
        }
    }
}

module.exports = AuthController