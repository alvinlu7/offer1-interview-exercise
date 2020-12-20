const jwt = require('express-jwt')

/**
 * A middleware that wil actually parse the JWT.
 */
const jwtMiddleware = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: [process.env.JWT_ALGORITHM],
})

/**
 * A middleware that handles authenticating the request before proceeding to the passed handler.
 *
 * @param handler A function that will handle the incoming request
 */
module.exports = {
  withAuth: (handler, passthrough = false) => {
    return async function (req, res){
      return new Promise(resolve => {
        jwtMiddleware(req, res, error => {
          if (error && !passthrough){ 
            res.status(422).send("Authentication required") 
            return
          }
          resolve(handler(req, res))
        })
      })
    }
  }
} 
