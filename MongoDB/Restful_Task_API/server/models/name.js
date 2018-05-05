const mongoose = require('../config/mongoose');
const Schema = mongoose;
var NameSchema = new mongoose.Schema({
    title:{required: true, type: String},
    description: {required: false, type: String, default: ""},
    completed: {required: false, type: Boolean,default: false }
}, {timestamps: true});
const Name = mongoose.model("Name", NameSchema);
module.exports = Name;