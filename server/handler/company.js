const Company = require('../../data/model/company')
const {clean, objId} = require('../util')

const del = async (req, res) => res.json(await Company.remove(objId(req.params.id)))

const get = async (req, res) => res.json(await Company.find())

const getById = async (req, res) => res.json(await Company.findOne(objId(req.params.id)))

const post = async (req, res) => {
    const body = new Company(req.body)
    await body.save()
    res.json(body)
}

const put = async (req, res) => {
    const body = await Company.findOne(objId(req.params.id))
    body.set(clean(req.body))
    await body.save()
    res.json(body)
}

module.exports = {del, get, getById, post, put}