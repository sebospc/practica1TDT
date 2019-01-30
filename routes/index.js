const express = require('express')
const UsertCtrl = require("../controllers/userCtrl")
const api  = express.Router()
const auth = require('../middlewares/auth')

api.post("/signup", UsertCtrl.signup)
api.post("/addInfoGps", auth, UsertCtrl.addInfoGps)
api.post('/login', UsertCtrl.login)

module.exports = api