const names = require('../controllers/names');

module.exports = function(app){
    app.get('/widgets', function(req,res){
        names.index(req,res);
    })
    app.get('/widgets/:name' , function(req,res){
        names.view(req,res);
    })
    app.post('/widgets', function(req,res){
        names.new(req,res);
    })
    app.put('/widgets/:name', function(req,res){
        names.update(req,res);
    })
    app.delete('/widgets/:name' , function(req,res){
        names.remove(req,res);
    })

}