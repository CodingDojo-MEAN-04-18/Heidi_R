var express = require('express');
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
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('index');
})
app.get('/quotes', function(req, res){
    Quoter.find({}, function(err, quotes){
        res.json(quotes)
    })
    
})
// Add User Request 
app.post('/quotes', function(req, res) {
    var month = ["","January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var x = new Date()
    let am_pm = "am"
    if(x.getHours() > 12){
        am_pm = "pm"
    }
    var date_string = x.getHours() + ":" + x.getMinutes() + am_pm  + " " + month[x.getMonth()+ 1] + " " + x.getDay() + " " + x.getFullYear()
    var new_Quote = new Quoter({name: req.body.name, quote: req.body.quote, created_at: date_string})
    new_Quote.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
            res.render('index', {errors: new_Quote.errors})
        }else { // else console.log that we did well and then redirect to the root route
          res.redirect('/quotes',);
        }
    })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})