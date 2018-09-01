const {connect, disconnect} = require('../data/database')
const express = require('express')
const middleware = require('./middleware')
const router = require('./router')

let app = null

process.on('exit', async (code) => {
    await disconnect()
    console.log('Exiting with code:', code)
})

process.on('SIGINT', async () => {
    await disconnect()
    console.log('Exiting with Ctrl+C')
    process.exit(0)
})

const start = async () => {
    await connect('192.168.0.189/test')

    app = express()
    middleware(app)
    router(app)

    app.listen(3000, () => {
        console.log('API running on port 3000!')
    })
}

try {
    start()
} catch(err) {
    console.error(err)
    process.exit(1)
}

module.exports = app