'use strict';
module.exports = (sequelize, DataTypes) => {
  const listing = sequelize.define('listing', {
    state: DataTypes.STRING,
    price: DataTypes.INTEGER,
    propertyId: DataTypes.INTEGER,
    escrowCompanyId: DataTypes.INTEGER,
    titleCompanyId: DataTypes.INTEGER,
    listingAgentId: DataTypes.INTEGER
  }, {});
  listing.associate = function(models) {
    listing.hasMany(models.excludedItem, {
      sourceKey: 'id',
      foreignKey: 'listingId',
      as: 'excludedItems'
    })
    listing.hasMany(models.includedItem, {
      sourceKey: 'id',
      foreignKey: 'listingId',
      as: 'includedItems'
    })
    listing.hasMany(models.savedListing, {
      sourceKey: 'id',
      foreignKey: 'listingId',
      as: 'savedListings'
    })
    listing.belongsTo(models.property, {
      foreignKey: 'propertyId',
      as: 'property'
    })
    listing.belongsTo(models.escrowCompany, {
      foreignKey: 'escrowCompanyId',
      as: 'escrowCompany'
    })
    listing.belongsTo(models.titleCompany, {
      foreignKey: 'titleCompanyId',
      as: 'titleCompany'
    })
    listing.belongsTo(models.listingAgent, {
      foreignKey: 'listingAgentId',
      as: 'listingAgent'
    })
  };
  return listing;
};