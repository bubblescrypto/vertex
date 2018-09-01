const express = require('express')

// Handlers
const account = require('./handler/account')
const company = require('./handler/company')
const public = require('./handler/public')

// Setup the routes for the api.
const router = (app) => {
    const r = express.Router()
    r.get('/', public.get)

    r.delete('/account/:id', account.del)
    r.get('/account', account.get)
    r.get('/account/:id', account.getById)
    r.post('/account', account.post)
    r.put('/account/:id', account.put)
    
    r.delete('/company/:id', company.del)
    r.get('/company', company.get)
    r.get('/company/:id', company.getById)
    r.post('/company', company.post)
    r.put('/company/:id', company.put)
    
    app.use('/v1', r)
}

module.exports = router