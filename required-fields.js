class KeyArr {
    constructor() {
        this.login = {
            required: ['email', 'password'],
            optional: []
        }

        this.users = {
            required: ['username', 'password', 'email'],
            optional: []
        }

        this.templates = {
            required: ['owner_id', 'template_object', 'name'],
            optional: ['public', 'md_description']
        }
    }

    loginPrune() {
        return this.login.required.concat(this.login.optional)
    }

    loginComplete() {
        return this.login.required
    }

    postPrune(type) {
        return this[type].required.concat(this[type].optional)
    }

    postComplete(type) {
        return this[type].required
    }

    putPrune(type) {
        return this[type].required.concat(this[type].optional)
    }

    putComplete(type) {
        return this[type].required
    }
}



module.exports = new KeyArr()