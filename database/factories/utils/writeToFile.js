const fs = require('fs')

module.exports = (fileName, data) => {
  
  const writeData = JSON.stringify(data)
  
  fs.writeFile(`../../../storage/data/${fileName}`, writeData, (error) => {
    if(error){
      throw error
    }

    console.log(`Successfully created ${data.length} rows of fake data at ${fileName}`)
  })
}