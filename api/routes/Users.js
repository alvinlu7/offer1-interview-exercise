const UserController = require('../controllers/UserController')

exports.checkUserByEmail = async (req, res) => {
  const { email } = req.query
  try{
    const result = await UserController.checkUserByEmail(email)
    res.json(result)
  } catch (error){
    console.log(error)
    res.status(500).send(error.message)
  }
}