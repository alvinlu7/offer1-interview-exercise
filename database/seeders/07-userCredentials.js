'use strict';

const userCredentials = require('../../storage/data/userCredentials.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('userCredentials', userCredentials);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('userCredentials', null, {})
  }
}


