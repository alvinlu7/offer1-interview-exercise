'use strict';
module.exports = (sequelize, DataTypes) => {
  const address = sequelize.define('address', {
    addressLine1: DataTypes.STRING,
    addressLine2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING
  }, {});
  address.associate = function(models) {
    // associations can be defined here
  };
  return address;
};