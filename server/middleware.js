const bodyParser = require('body-parser')

const middleware = (app) => {
    app.use(bodyParser.urlencoded({extended: true}))

    app.use(bodyParser.json())

    app.use((req, res, next) => {
        // Do something!
        next()
    })
}

module.exports = middleware