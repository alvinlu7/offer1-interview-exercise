'use strict';
module.exports = (sequelize, DataTypes) => {
  const property = sequelize.define('property', {
    propertyType: DataTypes.STRING,
    squareFeet: DataTypes.INTEGER,
    numberBedrooms: DataTypes.INTEGER,
    numberBaths: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    ownerType: DataTypes.STRING,
    ownerId: DataTypes.INTEGER,
    addressId: DataTypes.INTEGER
  }, {});
  property.associate = function(models) {
    property.belongsTo(models.owner, {
      foreignKey: 'ownerId',
      as: 'owner'
    })
    property.belongsTo(models.address, {
      foreignKey: 'addressId',
      as: 'address'
    })
  };
  return property;
};