'use strict';
module.exports = (sequelize, DataTypes) => {
  const savedListing = sequelize.define('savedListing', {
    listingId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  savedListing.associate = function(models) {
    savedListing.belongsTo(models.listing, {
      foreignKey: 'listingId',
      as: 'listing'
    })
    savedListing.belongsTo(models.user, {
      foreignKey: 'userId',
      as: 'user'
    })
  };
  return savedListing;
};