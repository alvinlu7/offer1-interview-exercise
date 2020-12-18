const writeToFile = require('./utils/writeToFile')
const faker = require('faker')
const bcrypt = require('bcrypt')

module.exports = {
  generate: async (ROWS_TO_CREATE) => {
    const data = []
    
    for(let i = 0; i < ROWS_TO_CREATE; i++){
      data.push({
        password: await bcrypt.hash(faker.internet.password(), 8),
        userId: Math.floor(Math.random() * ROWS_TO_CREATE + 1)
      })
    }

    writeToFile('userCredentials.json', data)
  }
}