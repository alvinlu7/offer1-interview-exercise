const writeToFile = require('./utils/writeToFile')

module.exports = {
  generate: () => {
    const data = []

    const names = ['Dishwasher', 'Dryer', 'Washer', 'Refridgerator']
    
    for(let i = 0; i < names.length; i++){
      data.push({
        name: names[i],
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    writeToFile('item.json', data)
  }
}

