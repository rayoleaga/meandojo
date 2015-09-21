var express = require("express");

//var session = requiere('express-session');
var app = express();
//app.use(session({secret: 'cosingdojorocks'}));

// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded());



// root route
app.get('/', function (req, res){
  res.render('index', {title: "my Express project"});
});

// POST route to process new user form data:
app.post('/users', function (req, res){
    console.log("POST DATA \n\n", req.body)

    //code to add user to db goes here!
    // redirect the user back to the root route.  
    res.redirect('/')
});
// SESSION user route
app.get("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});

app.use(express.static(__dirname + "/static"));

app.use(express.static(__dirname + "/static/css"));

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');

// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');


app.listen(8000,function(){
	console.log("Listening on 8000");
})
