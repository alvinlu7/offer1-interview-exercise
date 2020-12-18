'use strict';
module.exports = (sequelize, DataTypes) => {
  const includedItem = sequelize.define('includedItem', {
    listingId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER
  }, {});
  includedItem.associate = function(models) {
    includedItem.belongsTo(models.listing, {
      foreignKey: 'listingId',
      as: 'listing'
    })
    includedItem.belongsTo(models.item, {
      foreignKey: 'itemId',
      as: 'item'
    })
  };
  return includedItem;
};