// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();

//require body-parser
var bodyParser = require('body-parser');
//use body-parser
app.use(bodyParser.urlencoded());

// empty post variable to hold POST
var post;

// static content 
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})

app.get('/home', function(req, res){
	res.render("index");
})



app.post('/result', function(req, res){
	res.render('result', {survey: req.body});
})




app.listen(8000, function() {
 console.log("listening on port 8000");
})