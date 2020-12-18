const writeToFile = require('./utils/writeToFile')

module.exports = {
  generate: (ROWS_TO_CREATE) => {
    const data = []
      
    for(let i = 0; i < ROWS_TO_CREATE; i++){
      data.push({
        listingId: Math.floor(Math.random() * ROWS_TO_CREATE + 1),
        itemId: Math.floor(Math.random() * 4 + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    
    writeToFile('excludedItem.json', data)
  }
}
