'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      propertyType: {
        type: Sequelize.STRING
      },
      squareFeet: {
        type: Sequelize.INTEGER
      },
      numberBedrooms: {
        type: Sequelize.INTEGER
      },
      numberBaths: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      ownerType: {
        type: Sequelize.STRING
      },
      primaryImageUrl: {
        type: Sequelize.STRING
      },
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'owners',
          key: 'id'
        }
      },
      addressId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'addresses',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('properties');
  }
};