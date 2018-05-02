var express = require('express');
// Create an Express App
var app = express();
var mongoose = require('mongoose');
var wolfschema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    age: { type: Number, required: true},
   })
   mongoose.model('Wolf_pack', wolfschema); // We are setting this Schema in our Models as 'User'
   var w_model = mongoose.model('Wolf_pack') // We are retrieving this Schema from our Models, named 'User'
mongoose.connect('mongodb://localhost/mongoose_dashboard');
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
app.get('/', function(req, res) {
    w_model.find({}, function(err, wolves){
        console.log(wolves)
        res.render('index', {wolves: wolves})
    })
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
})
app.get('/wolves/new', function(req, res){
    res.render("create")
})
app.get('/wolves/edit/:id', function(req, res){
    wolfer = w_model.find({_id: req.params.id}, function(err, wolf) {
        console.log(wolf[0].name);
        res.render('update', {wolfer:wolf[0]});
    })
})
app.get('/wolves/:id', function(req, res){
        wolfer = w_model.find({_id: req.params.id}, function(err, wolf) {
            console.log(wolf[0].name);
            res.render('view', {wolfer:wolf[0]});
        })
})
// Add User Request
app.post('/wolves/:id', function(req,res){
    console.log("deleted ")
    w_model.remove({_id: req.params.id}, function(err){
        console.log("RECORD DELETED");
        res.redirect('/');
    })
    
}) 
app.post('/delete/:id', function(req, res){
    w_model.update({ _id: req.params.id }, req.body, function(err, wolf){
        console.log("bosy",req.body)
      if (err) { console.log(err); }
      res.redirect('/');
    });
  });
app.post('/wolves', function(req, res) {
    var new_wolf = new w_model({name: req.body.name, age: req.body.age})
    new_wolf.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
            res.render('create', {errors: new_wolf.errors})
        }else { 
            console.log("saved")// else console.log that we did well and then redirect to the root route
          res.redirect('/');
        }
    })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})