'use strict';

const items = require('../../storage/data/item.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('items', items);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('items', null, {})
  }
}

