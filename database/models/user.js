'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    online: DataTypes.BOOLEAN
  }, {});
  user.associate = function(models) {
    user.hasMany(models.message, {
      sourceKey: 'id',
      foreignKey: 'senderId',
      as: 'sentMessages'
    })
    user.hasMany(models.message, {
      sourceKey: 'id',
      foreignKey: 'recieverId',
      as: 'recievedMessages'
    })
    user.hasMany(models.savedListing, {
      sourceKey: 'id',
      foreignKey: 'listingId',
      as: 'savedListings'
    })
  };
  return user;
};