'use strict';
module.exports = (sequelize, DataTypes) => {
  const excludedItem = sequelize.define('excludedItem', {
    listingId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER
  }, {});
  excludedItem.associate = function(models) {
    excludedItem.belongsTo(models.item, {
      foreignKey: 'itemId',
      as: 'item'
    })
    excludedItem.belongsTo(models.listing, {
      foreignKey: 'listingId',
      as: 'listing'
    })
  };
  return excludedItem;
};