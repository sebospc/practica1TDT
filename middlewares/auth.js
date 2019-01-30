
const services = require('../services')

function isAuth(req, res, next) {
    if (!req.headers.authorization) return res.status(403).send({ message: "Not authorization" })
    console.log(req.headers.authorization)
    const token = req.headers.authorization
    console.log("token "+token)
    services.decodeToken(token) 
            .then(response =>{
                req.username = response
                console.log(response)
                next()
            })
            .catch(response =>{
                res.status(response.status)
            })
}

module.exports = isAuth