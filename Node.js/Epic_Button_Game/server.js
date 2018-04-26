// Import express and path modules.
var express = require( "express");
var path = require( "path");
// Create the express app.
var app = express();
// Define the static folder.
app.use(express.static(path.join(__dirname, "./static")));
// Setup ejs templating and define the views folder.
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// Root route to render the index.ejs view.
app.get('/', function(req, res) {
 res.render("index");
})
let clicks = 0
// Start Node server listening on port 8000.
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
   });
   var io = require('socket.io').listen(server);
   io.sockets.on('connection', function (socket) {
    // all the server socket code goes in here
    socket.on("add_clicked", function(){
        clicks +=1;
        return_clicks(clicks)
    })
    socket.on("reset_clicked", function(data){
        clicks = 0;
        return_clicks(clicks)
    })
    function return_clicks(number){
        io.emit('new_num', number);
    }
  })