require('dotenv').config()
const express = require('express')
const app = express()
const port = 3001

const bodyParser = require('body-parser')
const universalCookieExpress = require('universal-cookie-express')
const { Sequelize } = require('sequelize')

app.use(universalCookieExpress())
app.use(bodyParser.json())

const sequelize = new Sequelize(
  'offer1',
  'postgres',
  null,
  {
    dialect: 'postgres',
    logging: false
  }
)

sequelize.sync()

const Auth = require('./routes/Auth')

app.post('/api/login', Auth.login)
app.post('/api/register', Auth.register)

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`)
})