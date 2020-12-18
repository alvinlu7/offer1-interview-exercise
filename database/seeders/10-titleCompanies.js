'use strict';

const titleCompanies = require('../../storage/data/titleCompany.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('titleCompanies', titleCompanies);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('titleCompanies', null, {})
  }
}

