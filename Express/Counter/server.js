var express = require("express");
var app = express();
var session = require('express-session');
app.use(session({secret: 'codingdojorocks'}));  // string for encryption
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.get('/', function(req, response) {
    if("num" in req.session){
        req.session.num += 1
        //req.session.save()
        //console.log()("is there "+ req.session.num)
    }
    else{
        req.session.num = 1
        //req.session.save()
        //console.log()("not there. Set session to 0, session is: " + req.session.num)
    }
    //console.log()("end " + req.session.num + "*************")
    response.render("index", {num: req.session.num});
  })
app.post("/add", function(req, res){
    console.log("added")
    req.session.num +=1
    res.redirect("/")
});
app.post("/reset", function(req, res){
    req.session.num = 0
    res.redirect("/")
})
app.listen(8000, function() {
//console.log()("listening on port 8000");
})