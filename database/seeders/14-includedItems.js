'use strict';

const includedItems = require('../../storage/data/includedItem.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('includedItems', includedItems);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('includedItems', null, {})
  }
}

