const bookshelf = require('../bookshelf')

const Product = bookshelf.Model.extend({
  tableName: 'products'
})

module.exports = Product
