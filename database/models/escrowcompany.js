'use strict';
module.exports = (sequelize, DataTypes) => {
  const escrowCompany = sequelize.define('escrowCompany', {
    companyId: DataTypes.INTEGER
  }, {});
  escrowCompany.associate = function(models) {
    escrowCompany.belongsTo(models.company, {
      foreignKey: 'companyId',
      as: 'company'
    })

    escrowCompany.hasMany(models.listing, {
      sourceKey: 'id',
      foreignKey: 'escrowCompanyId',
      as: 'listings'
    })
  };
  return escrowCompany;
};