const mongoose = require('mongoose');
const Name = require('../models/name')

module.exports ={
    index: function(req,res){
        console.log("index")
        Name.find({})
        .then(names =>{
            res.json(names)
        })
        .catch(error =>{
            res.json({message: "Error", err: error})
        })
    },
    new: function(req,res){
        console.log('new')
        console.log(req.params.name)
        Name.create({name:req.params.name})
        .then(name =>{
            res.json(name)
        })
        .catch(error =>{
            res.json({message: "Error",err: error})
        })
    },
    remove: function(req,res){
        console.log('remove')
        Name.remove({name: req.params.name})
        .then(name =>{
            res.json(name)
        })
        .catch(error =>{
            req.json({message: "Error", err: error})
        })
    },
    view: function(req,res){
        Name.find({name: req.params.name})
        .then(name =>{
            res.json(name)
        })
        .catch(error =>{
            req.json({message: "Error", err: error})
        })
    },
}