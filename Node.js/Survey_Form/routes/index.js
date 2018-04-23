module.exports = function Route(app){
    app.get('/', function(req, res) {
        res.render("index");
       })
       app.get("/user", function(req, res){
           res.render("main")
       })
       
       // post route for adding a user
       app.post('/result', function(req, res) {
        //console.log("POST DATA", req.body);
        const values = {
            name: req.body.name,
            location: req.body.location,
            language: req.body.language,
            comment: req.body.comment,
       
        }
        //console.log(values)
        // This is where we would add the user to the database
        // Then redirect to the root route
        res.render("main", { user: values });
    })
}

