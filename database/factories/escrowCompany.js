const writeToFile = require('./utils/writeToFile')

module.exports = {
  generate: (ROWS_TO_CREATE) => {
    const data = []
    
    for(let i = 0; i < ROWS_TO_CREATE; i++){
      data.push({
        companyId: Math.floor(Math.random() * ROWS_TO_CREATE + 1)
      })
    }

    writeToFile('escrowCompany.json', data)
  }
}
