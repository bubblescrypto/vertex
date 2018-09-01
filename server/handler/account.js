const Account = require('../../data/model/account')
const {clean, objId} = require('../util')

const del = async (req, res) => res.json(await Account.remove(objId(req.params.id)))

const get = async (req, res) => res.json(await Account.find())

const getById = async (req, res) => res.json(await Account.findOne(objId(req.params.id)))

const post = async (req, res) => {
    const body = new Account(req.body)
    await body.save()
    res.json(body)
}

const put = async (req, res) => {
    const body = await Account.findOne(objId(req.params.id))
    body.set(clean(req.body))
    await body.save()
    res.json(body)
}

module.exports = {del, get, getById, post, put}