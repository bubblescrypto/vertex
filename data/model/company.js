const {Model} = require('mongorito')

class Company extends Model {
    collection() { return 'companies' }
}

module.exports = Company