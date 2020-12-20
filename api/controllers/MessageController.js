const db = require('../../database/models')
const Message = db.message
const User = db.user
const { Op } = require('sequelize')

module.exports = {
  getConversation: async (senderId, recieverId) => {
    const messages = await Message.findAll({
      where:{
        [Op.or]: [
          {senderId, recieverId},
          {recieverId: senderId, senderId: recieverId}
        ]
      }
    })

    return messages
  },

  getConversations: async (senderId) => {
    const messages = await Message.findAll({
      where:{
        [Op.or]: [
          {senderId},
          {recieverId: senderId}
        ]
      }
    })

    let userIds = []

    messages.map(message => {
      if(!userIds.includes(message.recieverId) && message.recieverId !== senderId){
        userIds.push(message.recieverId)
      }
      if(!userIds.includes(message.senderId) && message.senderId !== senderId){
        userIds.push(message.senderId)
      }
    })

    const users = await User.findAll({
      where:{
        id: userIds
      }
    })

    return users
  },

  newMessage: async (message) => {
    await Message.create(message)
    const reciever = await User.findByPk(message.recieverId)
    return reciever
  },
}