const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let usageData = yaml.safeLoad(fs.readFileSync(path.join(__dirname, '..', 'data', 'usage.yml')))
    const usages = usageData.map(u => {
      return Object.assign({}, u, {
        createdAt: new Date(),
        updatedAt: new Date()
      })
    })
    return queryInterface.bulkInsert('Usages', usages)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usages')
  }
}
