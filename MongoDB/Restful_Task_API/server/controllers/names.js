const mongoose = require('mongoose');
const Name = require('../models/name')

module.exports ={
    index: function(req,res){
        console.log("index")
        Name.find(req.body)
        .then(names =>{
            res.json(names)
        })
        .catch(error =>{
            res.json({message: "Error", err: error})
        })
    },
    new: function(req,res){
        console.log('new')
        Name.create(req.body)
        .then(name =>{
            res.json(name)
        })
        .catch(error =>{
            res.json({message: "Error",err: error})
        })
    },
    remove: function(req,res){
        console.log('remove')
        Name.remove({title: req.params.name})
        .then(name =>{
            res.json(name)
        })
        .catch(error =>{
            res.json({message: "Error", err: error})
        })
    },
    view: function(req,res){
        Name.find({title: req.params.name})
        .then(name =>{
            res.json(name)
        })
        .catch(error =>{
            res.json({message: "Error", err: error})
        })
    },
    update: function(req,res){
        Name.update({title: req.params.title}, req.body,{new: true})
        .then(name =>{
            //Name.find({title: req.body.title})
            //.then(updated_name =>{
                //console.log(updated_name)
            res.json(name, updated_names)
            //})
            //.catch(error =>{
                //res.json({message: "Error", err: error})
           // })  
        })
        .catch(error =>{
            console.log("another error")
            res.json({message: "Error", err: error})
        })
    }
}