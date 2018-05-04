var express = require('express');
// Create an Express App
var app = express();
var mongoose = require('mongoose');
var quoteSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    quote: { type: String, required: true},
    created_at: { type: String},
   })
   mongoose.model('Quote', quoteSchema); // We are setting this Schema in our Models as 'User'
   var Quoter = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'User'
mongoose.connect('mongodb://localhost/quoting_dojo');
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
require('./server/config/routes.js')(app)
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})