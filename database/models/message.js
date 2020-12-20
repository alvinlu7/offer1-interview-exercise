'use strict';
module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
    message: DataTypes.TEXT,
    senderId: DataTypes.INTEGER,
    recieverId: DataTypes.INTEGER
  }, {});
  message.associate = function(models) {
    message.belongsTo(models.user, {
      foreignKey: 'senderId',
      as: 'sender'
    })
    message.belongsTo(models.user, {
      foreignKey: 'recieverId',
      as: 'reciever'
    })
  };
  return message;
};