module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    repository: DataTypes.STRING,
    description: DataTypes.STRING,
    laborHours: DataTypes.INTEGER
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
  }
  return Product
}
