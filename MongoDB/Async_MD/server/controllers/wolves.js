const mongoose = require('mongoose')
const w_model = require("../models/wolf.js");

module.exports ={
    root: function(req,res){
        w_model.find(req.body)
            .then(wolves =>{
                res.render('index', {wolves})
            })
            .catch(error =>{
                res.json({message: "Error", err:error})
            })
    },
    edit: function(req,res){
        w_model.update({ _id: req.params.id }, req.body)
        .then(wolf =>{
            res.json(wolf)
        })
        .catch(error =>{
            res.json({message: "Error", err:error})
        })
    },
    find: function(req,res){
        w_model.find({_id: req.params.id})
        .then(wolf =>{
            res.json(wolf)
        })
        .catch(error =>{
            res.json({messages: "Error", error:err})
        })
    },
    delete: function(req,res){
        w_model.remove({_id: req.params.id})
            .then(wolf =>{
                res.json(wolf)
            })
            .catch(error =>{
                res.json({message: "Error", err: error})
            })
    },
    post_create: function(req,res){
        w_model.create(req.body)
        .then(wolf =>{
            res.json(wolf)
        })
        .catch(error =>{
            res.json({message: "Error", err:error})
        })
    }

}