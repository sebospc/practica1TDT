

var config = require('./config')
const mongoose = require('mongoose')
const app = require("./app")


mongoose.connect(config.db,{ useCreateIndex: true,
                             useNewUrlParser: true } , (err, res) => {
    if (err) throw err
    // start the express web server listening on 8080
    app.listen(config.port, function () {
        console.log(`listening on port ${config.port}`)
    })
});











