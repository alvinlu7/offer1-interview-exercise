'use strict';

const companies = require('../../storage/data/company.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('companies', companies);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('companies', null, {})
  }
}


