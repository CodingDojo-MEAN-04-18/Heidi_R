var mongoose = require('mongoose');
const Schema = mongoose;
var quoteSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    quote: { type: String, required: true},
    created_at: { type: String},
   })
   const Quote = mongoose.model('Quote', quoteSchema); // We are setting this Schema in our Models as 'User'
   module.exports = Quote;