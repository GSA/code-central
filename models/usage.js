module.exports = (sequelize, DataTypes) => {
  const Usage = sequelize.define('Usage', {
    key: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    exempt: DataTypes.BOOLEAN
  })
  Usage.associate = (models) => {
    Usage.hasMany(models.Product, {
      foreignKey: 'usageKey',
      as: 'products'
    })
  }
  return Usage
}
