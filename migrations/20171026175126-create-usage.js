module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('Usages', {
        key: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.STRING
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.TEXT
        },
        exempt: {
          allowNull: false,
          type: Sequelize.BOOLEAN
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
    })
    .then(() => {
      queryInterface
        .addColumn('Products', 'usageKey', {
          type: Sequelize.STRING,
          references: {
            model: 'Usages',
            key: 'key'
          }
        })
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface
      .removeColumn('Products', 'usageKey')
      .then(() => {
        queryInterface.dropTable('Usages')
      })
  }
}
