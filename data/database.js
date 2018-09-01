const {Database} = require('mongorito')

// Plugins
const timestamp = require('./plugin/timestamp')

// Models
const Account = require('./model/account')
const Company = require('./model/company')

let db = null

const connect = async (url, options = {}) => {
    db = new Database(url, options)

    await db.connect()

    // Plugins/Middleware
    db.use(timestamp())

    // Model registration
    db.register(Account)
    db.register(Company)

    return db
}

const disconnect = async () => await db.disconnect()

module.exports = {connect, disconnect}