module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    repository: DataTypes.STRING,
    description: DataTypes.STRING,
    laborHours: DataTypes.INTEGER
  })
  Product.associate = (models) => {
    // associations can be defined here
  }
  return Product
}
