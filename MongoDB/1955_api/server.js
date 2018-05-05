const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Parser = require('body-parser');
app.use(Parser.json()); 
const path = require('path');

require("./server/config/routes.js")(app);//routes

app.listen(8000, function(){
    console.log("listening on port 8000")
})