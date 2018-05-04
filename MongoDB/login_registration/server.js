
const bcrypt = require('bcrypt');
const express = require("express");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/login_registration')
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const path = require("path");
app.use(express.static(path.join(__dirname, './static')));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

//routes
app.get("/", function(req,res){
    res.render("index");
});
app.post("/login", function(req,res){
    if(req.body.password == "" ){
        res.render("index", {error: "fields cannot be empty"})
    }
    else{
        User.findOne({email:{$in: req.body.email}})
        .then(user =>{
    
            bcrypt.compare(req.body.password,user.password)
            .then(pass =>{
                if(user && pass == true){
                    console.log("user exists*")
                    res.redirect("/")
                }
                else{
                    res.render("index",{error: "email/password incorrect"})
                }
            })
            .catch(error =>{
                console.log("error")
                res.render("index", error)
            })
    
        })
        .catch(error =>{
            console.log(error)
            res.render("index")
        })
    }

});
app.post("/register", function(req,res){
    console.log(req.body);
    bcrypt.hash(req.body.password, 10)
    .then(new_pass =>{
        User.create({email: req.body.email, first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday, password:new_pass})
        .then(user =>{
            console.log("user successfuly added", user)
            console.log("*******************************")
            res.redirect("/")
        })
        .catch(error =>{
            res.render("index", {error})
        })
    })

});
const Schema = mongoose.Schema;
    const UserSchema = new mongoose.Schema({
        first_name: {
            type: String,
            required: true,
            minlength: 3,
        },
        last_name: {
            type: String,
            required: true,
            minlength: 3,
        },
        email: {
            type: String,
            required: true,
        },
        birthday: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }
    })
mongoose.model('User', UserSchema);
var User = mongoose.model("User");
app.listen(8000, function(){
    console.log("Listening on port 8000")
})