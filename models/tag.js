module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  })
  Tag.associate = (models) => {
    Tag.belongsTo(models.Product, {
      foreignKey: 'productId',
      onDelete: 'CASCADE'
    })
  }
  return Tag
}
