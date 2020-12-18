const writeToFile = require('./utils/writeToFile')
const faker = require('faker')

module.exports = {
  generate: (ROWS_TO_CREATE) => {
    const data = []
    
    for(let i = 0; i < ROWS_TO_CREATE; i++){
      data.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        online: faker.random.boolean()
      })
    }

    writeToFile('user.json', data)
  }
}