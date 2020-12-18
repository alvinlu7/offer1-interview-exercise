'use strict';
module.exports = (sequelize, DataTypes) => {
  const userCredentials = sequelize.define('userCredentials', {
    password: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  userCredentials.associate = function(models) {
    userCredentials.belongsTo(models.user, {
      foreignKey: 'userId',
      as: 'user'
    })
  };
  return userCredentials;
};