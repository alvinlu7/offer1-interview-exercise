const writeToFile = require('./utils/writeToFile')
const faker = require('faker')

module.exports = {
  generate: (ROWS_TO_CREATE) => {
    const data = []
    
    for(let i = 0; i < ROWS_TO_CREATE; i++){
      data.push({
        addressLine1: faker.address.streetAddress(),
        addressLine2: Math.random() * 5 > 3 ? faker.address.secondaryAddress() : null,
        city: faker.address.city(),
        state: faker.address.city(),
        zip: faker.address.zipCode(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
  
    writeToFile('address.json', data)
  }
}
