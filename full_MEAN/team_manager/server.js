//basics setup//
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const { Schema } = mongoose;
const app = express();//create app

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json());

//mongoDB Model Setup//

mongoose.connect('mongodb://localhost/teammanager');
mongoose.connection.on('connected', function(){
    console.log("connected to mongoose DB")
})

const PlayerSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    position: {
        type: String,
        required: false,
        default: "N/A"
    },
    game:{
        type: Array,
        required: false,
        default: ["playing", "playing", "playing"]

    },
    
},{timestamps: true})

mongoose.model('Player', PlayerSchema);
const Player = mongoose.model('Player')
//app routing//
const taskController = {
    index: (request, response) => {
  
      Task.find({})
        .then(tasks => response.json(tasks))
        .catch(error => console.log(error));
  
    },
    create: (request, response) => {
  
      Task.create(request.body)
        .then(task => response.json(task))
        .catch(error => console.log(error));
  
    }
  };
app.get('/players', function(req,res){
    Player.find({})
    .then(data =>{
        res.json(data)
    })
    .catch(err =>{
        res.json(err)

    })
})
app.post('/add', function(req,res){
    Player.create(req.body)
    .then(data =>{
        res.json("created")
    })
    .catch(err =>{
        res.json(err)
    })
})
app.post('/delete',function(req,res){
    Player.remove({_id: req.body.id}, function(err,result){
        if(err){
            console.log(err)
        }
        if(result){
            res.json(result)
        }
    })
})
app.post('/update', function(req,res){
    let x = req.body[1]
    quote = 'game.' + x
    Player.update({_id: req.body[2]},{$set: {[quote]: req.body[0]}})
    .then(data =>{
        res.json(data)
    })
    .catch(err =>{
        res.json(err)
    })
})
app 
.get('/tasks', taskController.index)
.post('/tasks', taskController.create)
.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});


//port setup//
app.listen(8000, function() {//set server to 8000
    console.log("listening on port 8000");
})