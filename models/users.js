const db = require('../database/connection.js')
const Model = require('./model.js')('users')

class Users extends Model {

    static oneFromEmail(email) {
        return db('users').where({ email }).first()
    }

    static oneFromUsername(username) {
        return db('users').where({ username }).first()
    }

    static all() {
        return db('users').select('id', 'username', 'email')
    }

    static oneSafe(id) {
        return db('users').select('id', 'username').where({ id }).first()
    }

    static oneAdmin(id) {
        return db('users').select('id', 'username', 'email').where({ id }).first()
    }
}

module.exports = Users