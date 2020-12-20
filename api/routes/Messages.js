const MessageController = require('../controllers/MessageController')

exports.getConversation = async (req, res) => {
  const { id } = req.query
  try{
    const result = await MessageController.getConversation(req.user.userId, Number.parseInt(id))
    res.json(result.length > 0 ? result : false)
  } catch (error){
    console.log(error)
    res.status(500).send(error.message)
  }
}

exports.getConversations = async (req, res) => {
  try{
    const result = await MessageController.getConversations(req.user.userId)
    res.json(result)
  } catch (error){
    console.log(error)
    res.status(500).send(error.message)
  }
}

exports.createMessage = async (req, res) => {
  const { recieverId, message } = req.body
  console.log(req.user)
  try{
    const reciever = await MessageController.newMessage({
      senderId: req.user.userId,
      recieverId,
      message
    })
    res.status(201).json({reciever, senderId: req.user.userId})
  } catch (error){
    console.log(error)
    res.status(500).send(error.message)
  }
}