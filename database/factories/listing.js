const writeToFile = require('./utils/writeToFile')

module.exports ={
  generate: (ROWS_TO_CREATE) => {
    const data = []
    
    const states = ['Pending', 'Active', 'PreSale']
    
    for(let i = 0; i < ROWS_TO_CREATE; i++){
      data.push({
        state: states[Math.floor(Math.random()*states.length)],
        price: Math.floor(Math.random()*2000000 + 250000),
        propertyId: Math.floor(Math.random() * ROWS_TO_CREATE + 1), 
        escrowCompanyId: Math.floor(Math.random() * ROWS_TO_CREATE + 1),
        titleCompanyId: Math.floor(Math.random() * ROWS_TO_CREATE + 1),
        listingAgentId: Math.floor(Math.random() * ROWS_TO_CREATE + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    
    writeToFile('listing.json', data)
  }
}
