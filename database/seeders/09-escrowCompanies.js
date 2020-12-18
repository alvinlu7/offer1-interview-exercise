'use strict';

const escrowCompanies = require('../../storage/data/escrowCompany.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('escrowCompanies', escrowCompanies);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('escrowCompanies', null, {})
  }
}


