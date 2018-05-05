const wolves = require("../controllers/wolves.js")
const mongoose = require('mongoose');
const w_model = mongoose.model('Wolf_pack')


module.exports = function(app){
    app.get('/', function(req, res) {
        wolves.root(req,res)
    })
    app.get('/wolves/new', function(req, res){
        res.render("create")
    })
    app.get('/wolves/edit/:id', function(req, res){
        wolves.edit(req,res)
    })
    app.get('/wolves/:id', function(req, res){
        wolves.find(req,res)
    })
    app.post('/wolves/:id', function(req,res){
        wolves.delete(req,res)            
    }) 
    app.post('/delete/:id', function(req, res){
        wolves.post_delete(req,res)
      });
    app.post('/wolves', function(req, res) {
        wolves.post_create(req,res)
    })
}
