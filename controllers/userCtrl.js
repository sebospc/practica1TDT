const bcrypt = require('bcrypt');
const User = require("../models/userModel")
const service = require("../services")

function signup(req, res) {

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    user.save((err) => {
        if (err) return res.status(500).send({ message: `Error in signup: ${err}` })

        return res.status(200).send({ token: service.createToken(user) })
    })


}

function addInfoGps(req, res) {
    console.log("req user"+req.username)
    User.updateOne({ username: req.username },
        { $push: { extraInfo: { gpsLatitud: req.body.gpsLatitud, gpsLongitud: req.body.gpsLongitud, hora: req.body.hora, fecha: req.body.fecha } } },
        (err, extr) => {
            if (err) {
                res.status(500).send("error while adding info")
            } else {
                res.status(200).send("info added correctly")
            }
        })
}

function login(req, res) {


    User.findOne({ username: req.body.username }).select('username +password').exec(function (err, user) {
        if (err) return res.status(500).send({ message: err })

        if (user == null) return res.status(404).send({ message: 'Wrong user' })

        if (bcrypt.compareSync(req.body.password, user.password)) {
            req.user = user
            res.status(200).send({
                message: 'Correct login',
                token: service.createToken(user),
            })
        } else {
            res.status(500).send({
                message: 'Incorrect login',
                token: service.createToken(user),
            })
        }
    })
}

module.exports = {
    signup,
    addInfoGps,
    login
}