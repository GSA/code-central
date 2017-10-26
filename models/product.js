module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    repository: DataTypes.STRING,
    description: DataTypes.STRING,
    laborHours: DataTypes.INTEGER,
    usageKey: DataTypes.STRING
  })
  Product.associate = (models) => {
    Product.hasMany(models.Tag, {
      foreignKey: 'productId',
      as: 'tags'
    })
    Product.hasMany(models.License, {
      foreignKey: 'productId',
      as: 'licenses'
    })
    Product.belongsTo(models.Usage, {
      foreignKey: 'usageKey',
      as: 'usage'
    })
  }
  return Product
}
