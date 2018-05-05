const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1955_api');
mongoose.connection.on("connected",() => console.log("mongodb connected"));
module.exports = mongoose;