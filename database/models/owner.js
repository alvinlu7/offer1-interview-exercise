'use strict';
module.exports = (sequelize, DataTypes) => {
  const owner = sequelize.define('owner', {
    userId: DataTypes.INTEGER
  }, {});
  owner.associate = function(models) {
    owner.belongsTo(models.user, {
      foreignKey: 'userId',
      as: 'user'
    })
    owner.hasMany(models.property, {
      sourceKey: 'id',
      foreignKey: 'ownerId',
      as: 'properties'
    })
  };
  return owner;
};