const names = require('../controllers/names')

module.exports = function(app){
    app.get('/', function(req,res){
        names.index(req,res)
    })
    app.get('/new/:name/', function(req,res){
        names.new(req,res)
    })
    app.get('/remove/:name/' , function(req,res){
        names.remove(req,res)
    })
    app.get('/:name' , function(req,res){
        names.view(req,res)
    })
}