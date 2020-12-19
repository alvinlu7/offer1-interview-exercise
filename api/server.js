require('dotenv').config()
const express = require('express')
const app = express()
const port = 3001

const bodyParser = require('body-parser')
const universalCookieExpress = require('universal-cookie-express')
const { Sequelize } = require('sequelize')
const cors = require('cors')

app.use(cors())
app.use(universalCookieExpress())
app.use(bodyParser.json())

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: process.env.DB_CONNECTION,
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