const db = require('../../database/models')
const Message = db.message
const User = db.user

module.exports = {
  getConversation: async (senderId, recieverId) => {
    const messages = await Message.findAll({
      where:{
        senderId,
        recieverId
      }
    })

    return messages
  },

  getConversations: async (senderId) => {
    const messages = await Message.findAll({
      where:{
        senderId
      }
    })

    let userIds = []

    messages.map(message => {
      if(!users.includes(message.recieverId)){
        users.push(message.recieverId)
      }
    })

    const users = await User.findAll({
      where:{
        userId: userIds
      }
    })

    return users
  },

  newMessage: async (message) => {
    await Message.create(message)
  },
}