'use strict';

const savedListings = require('../../storage/data/savedListing.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('savedListings', savedListings);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('savedListings', null, {})
  }
}

