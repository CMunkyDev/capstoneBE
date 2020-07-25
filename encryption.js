const bcrypt = require('bcrypt')

module.exports = {
    promiseHash(password) {
        return bcrypt.hash(password, 10)
    },
    promiseCompare(plainPass, hashedPass) {
        return bcrypt.compare(plainPass, hashedPass)
    }
}