const writeToFile = require('./utils/writeToFile')
const faker = require('faker')

module.exports = {
  generate: (ROWS_TO_CREATE) => {
    const data = []
    
    for(let i = 0; i < ROWS_TO_CREATE; i++){
      data.push({
        message: faker.lorem.sentence(),
        senderId: Math.floor(Math.random() * ROWS_TO_CREATE + 1),
        recieverId: Math.floor(Math.random() * ROWS_TO_CREATE + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    writeToFile('message.json', data)
  }
}