const wolves = require("../controllers/wolves.js")
const mongoose = require('mongoose');
const w_model = mongoose.model('Wolf_pack')


module.exports = function(app){
    app.get('/wolves', function(req, res) {//retrieve all
        wolves.root(req,res)//
    })
    app.get('/wolves/:id', function(req, res){//view one
        wolves.find(req,res)//
    })
    app.post('/wolves', function(req, res) {//create
        wolves.post_create(req,res)//
    })
    app.put('/wolves/:id', function(req, res){//update
        wolves.edit(req,res)//
    })
    app.delete('/wolves/:id', function(req, res){//delete
        wolves.delete(req,res)
      });
}
