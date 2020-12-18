'use strict';

const properties = require('../../storage/data/property.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('properties', properties);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('properties', null, {})
  }
}

