
const bcrypt = require('bcrypt');
const express = require("express");
const app = express();
const session = require("express-session");
app.use(session({
    secret: 'cat keyboard',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
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
    req.session.email = '';
    req.session.logged_in = false;
    res.render("index");
});
app.get("/secrets", function(req,res){
    if(req.session.logged_in = true){
        console.log(req.session.email)
        User.findOne({email: req.session.email})
        .then(user =>{
            console.log("user: ",user)
            if(user){
                User.find({})
                .populate('_secrets')
                .then(users =>{
                    res.render("secrets", {users, x: req.session.email})
                })
                .catch(error =>{
                    console.log("error")
                    res.redirect("/")
                })
            }
            else{
                res.redirect("/")
            }
        })
        .catch(error =>{
            req.session.logged_in = false
            console.log("error: ", error)
            res.redirect("/")
        })
    }
    else{
        res.render("/", {error: "must log in to view secrets"})
    }
})
app.get("/secret/:id", function(req,res){
    console.log(req.params.id)
    Secret.find({_id: req.params.id})
    .then(secret =>{
        res.render("secret_id", {secret: secret[0]})
    })
    .catch(error =>{
        console.log("error finding secret")
    })
    
    
})
app.post("/delete/:id", function(req, res){
    Secret.remove({_id: req.params.id}, function(err){
        console.log("RECORD DELETED");
        res.redirect("/secrets")
    })

})
app.post("/secrets/add_comment", function(req,res){
    console.log(req.body.comment)
    if(req.body.comment == ''){
        console.log("empty comment")
        res.redirect("/secret/" + req.body.ids)
    }
    else{
        Secret.update({ _id: req.body.ids }, { $push: { comments: req.body.comment }}, function(err) {
            if(err){
                console.log(err)
            }
            else{
                console.log("added")
                res.redirect("/secret/" + req.body.ids)
            }
        });
    }
})
app.post("/secrets", function(req,res){
    console.log(req.session.email)
    User.findOne({ email:req.session.email})
    .then(user =>{
        console.log("user is: ",user)
		const newSecret = new Secret({secret: req.body.secret});
		newSecret._user = user._id;
		User.update({ _id: user._id }, { $push: {_secrets: newSecret }}, function(err) {
		});
		newSecret.save(function(err) {
			if (err) {
				console.log(err);
			} else {
				console.log("secret added");
			res.redirect("/secrets");
			}
		});
    })
    .catch(error =>{
        console.log(error)
    })
})
app.post("/login", function(req,res){
    if(req.body.password != "" ){
        User.findOne({email:{$in: req.body.email}})
        .then(user =>{
            bcrypt.compare(req.body.password,user.password)
            .then(pass =>{
                if(user && pass == true){
                    console.log(user._id)
                    console.log("user exists*")
                    req.session.email = user.email
                    req.session.logged_in = true
                    res.redirect("/secrets")
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
    else{
        res.render("index", {error: "fields cannot be empty"})
    }

});
app.post("/register", function(req,res){
    console.log(req.body);
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(req.body.email) == true){
        bcrypt.hash(req.body.password, 10)
        .then(new_pass =>{
            User.create({email: req.body.email, first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday, password:new_pass})
            .then(user =>{
                console.log("user successfuly added", user)
                console.log("*******************************")
                res.redirect("/secrets")
            })
            .catch(error =>{
                res.render("index", {error})
            })
        })
        .catch(error =>{
            res.render("index", {error: "Cannot hash passwords"})
        })
    }
    else{
        res.render("index", {error: "email invalid"})
    }


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
        },
        _secrets: [
            {type: Schema.Types.ObjectId, ref: 'Secret'}
        ]
    })
    const SecretSchema = new mongoose.Schema({
        secret:{
            required: true,
            type: String,
        },
        comments:{
            type: String,
        },
        _user: {type: Schema.Types.ObjectId, ref: 'User'}
    })
mongoose.model('User', UserSchema);
mongoose.model('Secret', SecretSchema);
var User = mongoose.model("User");
var Secret = mongoose.model("Secret");
app.listen(8000, function(){
    console.log("Listening on port 8000")
})