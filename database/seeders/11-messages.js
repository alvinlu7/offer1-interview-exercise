'use strict';

const messages = require('../../storage/data/message.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('messages', messages);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('messages', null, {})
  }
}

