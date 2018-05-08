const mongoose= require('mongoose')
mongoose.connect('mongodb://localhost/mongoose_dashboard');
mongoose.connection.on("connected", () => console.log("mongodb connected"));
module.exports = mongoose