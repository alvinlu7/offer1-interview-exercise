'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('listings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      state: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      propertyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'properties',
          key: 'id'
        }
      },
      escrowCompanyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'escrowCompanies',
          key: 'id'
        }
      },
      titleCompanyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'titleCompanies',
          key: 'id'
        }
      },
      listingAgentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'listingAgents',
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
    return queryInterface.dropTable('listings');
  }
};