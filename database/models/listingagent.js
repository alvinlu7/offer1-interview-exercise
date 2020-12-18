'use strict';
module.exports = (sequelize, DataTypes) => {
  const listingAgent = sequelize.define('listingAgent', {
    licenseNumber: DataTypes.INTEGER,
    licenseState: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  listingAgent.associate = function(models) {
    listingAgent.hasMany(models.listing, {
      sourceKey: 'id',
      foreignKey: 'listingAgentId',
      as: 'listings'
    })
  };
  return listingAgent;
};