const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const db = require('../../database/models')
const User = db.user
const UserCredentials = db.userCredentials

module.exports = {
  /**
   * Verifies the user credentials and puts together a JWT.
   *
   * @param email THe user email
   * @param password The user password (in plaintext)
   */
  login: async (email, password) => {
    const user = await User.findOne({
      attributes: ['id'],
      where: {
        email,
      },
    })

    if (!user) {
      throw new Error('Invalid credentials')
    } 

    const userCredentials = await UserCredentials.findOne({
      attributes: ['password'],
      where:{
        id: user.id
      }
    })

    if(!userCredentials){
      throw new Error('Invald credentials')
    }

    if (await bcrypt.compare(password, userCredentials.password)) {
      const expiresIn = 60 * 60 * 24 * 30 // 30 days
      const token = jwt.sign(
        {
          userId: user.id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn,
          algorithm: process.env.JWT_ALGORITHM,
        },
      )

      return {
        token,
        tokenType: 'Bearer',
        expiresIn,
      }
    }
  },

  /**
   * Register a user so they can directly login with their new account
   * afterwards.
   *
   * @param email The user's email
   * @param password The user's password
   */
  register: async (email, password) => {
    email = email.toLowerCase()
    password = await bcrypt.hash(password, 8)

    const existingUser = await User.findOne({
      where: { email },
    })

    if (existingUser) throw new Error('Email already exists')

    const user = await User.create({
      email
    })

    await UserCredentials.create({
      userId: user.id,
      password
    })
  }
}