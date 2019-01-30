const jwt = require("jwt-simple")
const moment = require('moment')
const config = require("../config")
function createToken(user){
    const payload = {
        sub: user.username, 
        iat: moment().unix(),
        exp: moment().add(14,'days').unix(),
    }

    return jwt.encode(payload, config.SECRET_TOKEN)
}

function decodeToken (token) {
    const decoded = new Promise((resolve, reject) => {
        console.log("before try")
      try {
        console.log("before payload")
        const payload = jwt.decode(token, config.SECRET_TOKEN)
        console.log("in try")
        if (payload.exp <= moment().unix()) {
            console.log("payload exp")
          reject({
            status: 401,
            message: 'El token ha expirado'
          })
        }
        console.log("before resolve")
        resolve(payload.sub)
      } catch (err) {
        console.log("in catch erro "+err)
        reject({
          status: 500,
          message: 'Invalid Token',
          err: err
        })
      }
    })
    console.log("before return")
    return decoded
  }

module.exports = {createToken, decodeToken}