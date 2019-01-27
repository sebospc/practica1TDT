var express = require("express");
var https = require('https')
var fs = require('fs')
var app = express();
var bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

let dbo;

const url = 'mongodb://127.0.0.1:27017';

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(url, { useNewUrlParser: true }, (err, database) => {
    if (err) {
        return console.log(err);
    }
    dbo = database.db("practica1");
    // start the express web server listening on 8080
    https.createServer({
        key: fs.readFileSync('server.key'),
        cert: fs.readFileSync('server.cert')
    }, app)
        .listen(4040, function () {
            console.log('listening on port 4040')
        })
});



app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/login/login.html")
})


app.post("/singup", function (req, res) {
    if (req.body.name == "") res.send("incorrect singup");

    dbo.collection("usuarios").insertOne({ name: req.body.name, psswd: req.body.passwd }, function (err, resp) {
        if (err) {
            res.send("incorrect singup");
        } else {
            res.send("correct singup");
        }

    })
})

app.post('/login', function (req, res) {
    console.log(req.body.name);
    dbo.collection("usuarios").findOne({ name: req.body.name }, function (err, items) {
        console.log(items);
        if (items == null) {
            console.log("is null")
            res.send("incorrect login")
        } else {
            if (req.body.passwd == items.psswd) { //this should be encrypted
                res.send("correct login")
            } else {
                res.send("incorrect login")
            }
        }
    })
})







