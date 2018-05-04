const mongoose = require('mongoose');
const Quoter = mongoose.model('Quote');
const quotes = require('../controllers/quotes.js')
module.exports = function(app){
    app.get('/', function(req, res) {
        res.render("index")
    })
    app.get('/quotes', function(req, res){
        quotes.find(req,res)
    })
    // Add User Request 
    app.post('/quotes', function(req, res) {
        quotes.post(req,res)
    })
}
