const faker = require('faker')
const writeToFile = require('./utils/writeToFile')

module.exports = {
  generate: (ROWS_TO_CREATE) => {
    const data = []
    
    for(let i = 0; i < ROWS_TO_CREATE; i++){
      data.push({
        licenseNumber: faker.random.number(1000000000),
        licenseState: faker.address.state(),
        userId: Math.floor(Math.random() * ROWS_TO_CREATE + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    
    writeToFile('listingAgent.json', data)
  }
}