const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.connection.on("connected", () => console.log("mongodb connected"));

module.exports = mongoose;