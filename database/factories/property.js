const faker = require('faker')
const writeToFile = require('./utils/writeToFile')

module.exports = {
  generate: (ROWS_TO_CREATE) => {
    const data = []
    
    const propertyType = ['SingleFamilyHome', 'Apartment', 'Townhouse']
    const ownerType = ['Individual', 'Company']
    
    for(let i = 0; i < ROWS_TO_CREATE; i++){
      data.push({
        propertyType: propertyType[Math.floor(Math.random()*propertyType.length)],
        squareFeet: Math.floor(Math.random()*10000 + 500),
        numberBedrooms: Math.floor(Math.random()*5 + 1),
        numberBaths: Math.floor(Math.random()*5 + 1),
        description: faker.lorem.paragraph(),
        ownerType: ownerType[Math.floor(Math.random()*ownerType.length)],
        primaryImageUrl: faker.image.city(),
        ownerId: Math.floor(Math.random() * ROWS_TO_CREATE + 1),
        addressId: Math.floor(Math.random() * ROWS_TO_CREATE + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    writeToFile('property.json', data)
  }
}