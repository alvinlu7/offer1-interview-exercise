const express = require('express')
const app = express()
const port = 3001

app.get('/login', (req, res) => {
  res.send('Testing')
})

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`)
})