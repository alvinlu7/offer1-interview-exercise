const db = require('../../database/models')
const User = db.user

module.exports = {
  checkUserByEmail: async (email) => {
    const user = await User.findOne({
      where: { email }
    })

    console.log(user)

    if(!user) return false
    return user.id
  },
}