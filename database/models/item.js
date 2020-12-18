'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    name: DataTypes.STRING
  }, {});
  item.associate = function(models) {
    item.hasMany(models.excludedItem, {
      sourceKey: 'id',
      foreignKey: 'itemId',
      as: 'excludedItems'
    })
    item.hasMany(models.includedItem, {
      sourceKey: 'id',
      foreignKey: 'itemId',
      as: 'includedItems'
    })
  };
  return item;
};