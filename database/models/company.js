'use strict';
module.exports = (sequelize, DataTypes) => {
  const company = sequelize.define('company', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    officerName: DataTypes.STRING,
    addressId: DataTypes.INTEGER
  }, {});
  company.associate = function(models) {
    company.belongsTo(models.address, {
      foreignKey: 'addressId',
      as: 'address'
    })
  };
  return company;
};