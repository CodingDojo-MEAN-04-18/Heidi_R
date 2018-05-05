const mongoose = require('../config/mongoose');
const Schema = mongoose;
var NameSchema = new mongoose.Schema({
    name:{required: true, type: String}
}, {timestamps: true});
const Name = mongoose.model("Name", NameSchema);
module.exports = Name;