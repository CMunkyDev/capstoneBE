require('dotenv').config()
const path = require('path')

const express = require('express')
const app = express()
const port = process.env.PORT || 3001

const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const {
    usersRouter: users,
    templatesRouter: templates,
    authRouter: auth
} = require('./routes')

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/api/users', users)
app.use('/api/templates', templates)
app.use('/auth', auth)

app.use((req, res) => {
    const status = 404
    const message = `${req.method} route for ${req.path} not found.`
    res.status(status).json({ status, message })
});

app.use((err, _req, res, _next) => {
    console.error(err)
    const status = err.status || 500
    const message = err.message || 'Something went wrong!'
    res.status(status).json({ message, status })
})

app.listen(port, () => {
    console.log('listening on port', port)
})
