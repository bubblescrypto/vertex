const {ObjectId} = require('mongorito')
const omit = new Set(['_id', 'createdAt', 'updatedAt'])

// Remove unwanted fields from object
const clean = (o) => {
    const no = {}
    Object.keys(o).forEach((k) => {
        if (omit.has(k)) return
        no[k] = o[k]
    })
    return no
}

// Return object id for mongo
const Id = id => ObjectId(id)

// Return object with _id and object id setup
const objId = id => ({_id: Id(id)})

module.exports = {clean, Id, objId}