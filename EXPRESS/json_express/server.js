// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
// require body-parser
var bodyParser = require('body-parser');
// use it!

// empty variable to hold post data
var post;

// static content 
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));

app.use(bodyParser.urlencoded());
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})
// post route for adding a user
app.post('/users', function(req, res) {
 console.log("POST DATA", req.body);
 
 post = ("POST DATA", req.body);

 res.redirect('/result');
})

app.get('/result', function(req, res){
 	res.render("result", {survey: post});
})




// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
})