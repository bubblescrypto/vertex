const {ActionTypes} = require('mongorito')
const moment = require('moment')

// Handle createdAt and updatedAt fields automatically.
const timestamp = () => {
    return () => {
        return ({model}) => next => action => {
            if (action.type === ActionTypes.SAVE) {
                const date = moment().unix()

                if (!action.fields.createdAt) {
                    action.fields.createdAt = date
                    model.set('createdAt', date)
                }

                action.fields.updatedAt = date
                model.set('updatedAt', date)
            }

            return next(action)
        }
    }
}

module.exports = timestamp