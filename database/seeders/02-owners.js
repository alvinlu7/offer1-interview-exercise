'use strict';
const owners = require('../../storage/data/owner.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('owners', owners);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('owners', null, {})
  }
}

