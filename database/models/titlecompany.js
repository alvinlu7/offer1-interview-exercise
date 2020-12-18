'use strict';
module.exports = (sequelize, DataTypes) => {
  const titleCompany = sequelize.define('titleCompany', {
    companyId: DataTypes.INTEGER
  }, {});
  titleCompany.associate = function(models) {
    titleCompany.hasMany(models.listing, {
      sourceKey: 'id',
      foreignKey: 'titleCompanyId',
      as: 'listings'
    })
    titleCompany.belongsTo(models.company, {
      foreignKey: 'companyId',
      as: 'company'
    })
  };
  return titleCompany;
};