const MessageController = require('../controllers/MessageController')

exports.getConversation = async (req, res) => {
  const { id } = req.query
  try{
    const result = await MessageController.getConversation(req.user.userId, Number.parseInt(id))
    res.json(result)
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
  try{
    const result = await MessageController.createMessage({
      senderId: req.user.userId,
      recieverId,
      message
    })
    res.json(result)
  } catch (error){
    console.log(error)
    res.status(500).send(error.message)
  }
}