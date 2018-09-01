const {Model} = require('mongorito')

class Account extends Model {
    collection() { return 'accounts' }
}

module.exports = Account