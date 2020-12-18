const AuthController = require('../../controllers/AuthController')

exports.login = async (req, res) => {
  const { email, password } = req.body
  try{
    const result = await AuthController.login(email, password)
    res.json(result)
  } catch (error){
    res.status(422).send(error.message)
  }
}

exports.register = async (req, res) => {
  const { email, password } = req.body
  try{
    await AuthController.register(email, password)
    res.status(201).end()
  } catch (error){
    res.status(422).send(error.message)
  }
}