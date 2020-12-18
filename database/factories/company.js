const writeToFile = require('./utils/writeToFile')
const faker = require('faker')

module.exports = {
  generate: (ROWS_TO_CREATE) => {
    const data = []
    
    for(let i = 0; i < ROWS_TO_CREATE; i++){
      data.push({
        name: faker.company.companyName(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        officerName: faker.name.findName(),
        addressId: Math.floor(Math.random() * ROWS_TO_CREATE + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    writeToFile('company.json', data)
  }
}