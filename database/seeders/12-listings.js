'use strict';

const listings = require('../../storage/data/listing.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('listings', listings);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('userCredentials', null, {})
  }
}
