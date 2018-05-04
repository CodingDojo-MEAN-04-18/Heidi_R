
// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
const mongoose = require('mongoose');
const {Schema} = mongoose;
mongoose.connect('mongodb://localhost/message_board');
const MessageSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        minlength: 2
    },
	message: {
        required: true,
        type: String,
    },
    _comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
        }

    ],
}, { timestamps:true });
const CommentSchema = new mongoose.Schema({
	name: {
        required: true,
        type: String,
        minlength: 2
    },
	comment: {
        required: true,
        type: String,
    },
	_message: {type: Schema.Types.ObjectId, ref: 'Message'}
})
   mongoose.model('Message', MessageSchema);
   mongoose.model('Comment', CommentSchema); // We are setting this Schema in our Models as 'User'
   var Message = mongoose.model("Message");
   var Comment = mongoose.model("Comment") // We are retrieving this Schema from our Models, named 'User'
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
    Message.find({})
    .populate('_comments')
    .then(messages =>{
        console.log(messages)
        res.render('index', {messages});
    })
    .catch(error =>{
        console.log("error finding messages: ", error);
    })
})
// Add User Request 
app.post('/message', function(req, res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    Message.create(req.body)
    .then(message =>{
        console.log("successfuly added")
        res.redirect("/")
    })
    .catch(error =>{
        console.log("error adding message: ", error)
        res.render("index", {error})
    })
  })
app.post("/comment/:id", function(req, res) {
	const messageId = req.params.id;
	Message.findOne({ _id: messageId }, function(err, message) {
		const newComment = new Comment({ name: req.body.name, comment: req.body.comment });
		newComment._message = message._id;
		Message.update({ _id: message._id }, { $push: { _comments: newComment }}, function(err) {

		});
		newComment.save(function(err) {
			if (err) {
				console.log(err);
			} else {
				console.log("comment added");
				res.redirect("/");
			}
		});
	});
});
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
