'use strict';
const listingAgents = require('../../storage/data/listingAgent.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('listingAgents', listingAgents);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('listingAgents', null, {})
  }
}
