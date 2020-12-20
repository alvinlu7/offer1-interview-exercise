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
const Listing = require('./routes/Listings')
const Message = require('./routes/Messages')
const User = require('./routes/Users')
const { withAuth } = require('./middleware/with-auth')

app.post('/api/login', Auth.login)
app.post('/api/register', Auth.register)
app.get('/api/homes', withAuth(Listing.getHomes, true))
app.get('/api/home', Listing.getHome)
app.post('/api/homes/toggleSave', withAuth(Listing.toggleSavedHome, false))
app.get('/api/homes/favorites', withAuth(Listing.getFavorites, false))
app.get('/api/messages/getConversation', withAuth(Message.getConversation, false))
app.get('/api/messages/getConversations', withAuth(Message.getConversations, false))
app.post('/api/messages/createMessage', withAuth(Message.createMessage, false))
app.get('/api/users/checkUserByEmail', User.checkUserByEmail)

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`)
})