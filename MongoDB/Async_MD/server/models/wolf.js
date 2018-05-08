
const mongoose = require("../config/mongoose.js");
const Schema = mongoose;
var wolfschema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    age: { type: Number, required: true},
   })
    const Wolf = mongoose.model('Wolf_pack', wolfschema); // We are setting this Schema in our Models as 'User'
   module.exports = Wolf;