'use strict';
const addresses = require('../../storage/data/address.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('addresses', addresses);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('addresses', null, {})
  }
}