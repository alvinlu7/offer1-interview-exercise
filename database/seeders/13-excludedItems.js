'use strict';

const excludedItems = require('../../storage/data/excludedItem.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('excludedItems', excludedItems);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('excludedItems', null, {})
  }
}

