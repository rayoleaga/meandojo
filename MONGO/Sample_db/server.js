// require the path module
var path = require("path");
// require express and create the express app
var express = require("express");
var app = express();

/////////MONGOOSE//////////
// require mongoose and create the mongoose variable
var mongoose = require('mongoose');
// connects and creates a db called basic_mongoose
mongoose.connect('mongodb://localhost/basic_mongoose');
// schema - collection properties
var UserSchema = new mongoose.Schema({
 name: String,
 age: Number
})
var User = mongoose.model('User', UserSchema);
/////////////////////////

// require bodyParser since we need to handle post data for adding a user
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
// static content
app.use(express.static(path.join(__dirname, "./static")));
// set the views folder and set up ejs
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


// root route
app.get('/', function(req, res) {
	User.find({}, function(err, users){
		res.render('index',{response: users});
		console.log(users);

	});

});

// route to add a user
app.post('/users', function(req, res) {
  console.log("POST DATA", req.body);
  // create a new User with the name and age corresponding to those from req.body
  var user = new User({name: req.body.name, age: req.body.age});
  // try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  user.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a user!');
      res.redirect('/');
    }
  });
});

// listen on 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
})
