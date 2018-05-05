const mongoose = require('mongoose')
const w_model = require("../models/wolf.js");

module.exports ={
    root: function(req,res){
        w_model.find({}, function(err, wolves){
            console.log(wolves)
            res.render('index', {wolves: wolves})
        })
    },
    edit: function(req,res){
        wolfer = w_model.find({_id: req.params.id}, function(err, wolf) {
            console.log(wolf[0].name);
            res.render('update', {wolfer:wolf[0]});
        })
    },
    find: function(req,res){
        wolfer = w_model.find({_id: req.params.id}, function(err, wolf) {
            console.log(wolf[0].name);
            res.render('view', {wolfer:wolf[0]});
        })
    },
    delete: function(req,res){
        console.log("deleted ")
        w_model.remove({_id: req.params.id}, function(err){
            console.log("RECORD DELETED");
            res.redirect('/');
        })
    },
    post_delete: function(req,res){
        w_model.update({ _id: req.params.id }, req.body, function(err, wolf){
            console.log("bosy",req.body)
          if (err) { console.log(err); }
          res.redirect('/');
        });
    },
    post_create: function(req,res){
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
    }

}