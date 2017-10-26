module.exports = (sequelize, DataTypes) => {
  const License = sequelize.define('License', {
    url: DataTypes.STRING,
    name: DataTypes.STRING
  })
  License.associate = (models) => {
    License.belongsTo(models.Product, {
      foreignKey: 'productId',
      onDelete: 'CASCADE'
    })
  }
  return License
}
