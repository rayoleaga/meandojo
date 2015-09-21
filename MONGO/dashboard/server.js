/////////////MODULES///////////////////
// require the path module
var path = require("path");
// require express and create the express app
var express = require("express");
var app = express();
// require bodyParser since we need to handle post data for adding a user
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
var mongoose = require('mongoose');

// static content
app.use(express.static(path.join(__dirname, "./static")));
// set the views folder and set up ejs
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
/////////////MODULES END///////////////////

/////////////DATABASE///////////////////
mongoose.connect('mongodb://localhost/dashboard');
var AnimalSchema = new mongoose.Schema({
	name: String
});
var Animal = mongoose.model('Animal', AnimalSchema);

/////////////DATABASE END///////////////////




/////////////ROUTES///////////////////

// get All info
app.get('/', function(req, res) {
 	
 	Animal.find({}, function(err, animals){
		console.log(animals);
		res.render('index',{response: animals});

	});
});

// post All info
app.post('/mongooses', function(req, res){
	console.log("POST DATA", req.body);
	var animal = new Animal({name: req.body.name});
	animal.save(function(err){
		if (err) {
			console.log("Something went wrong");
		} else{
			console.log("You have succesfully added a new animal");
			res.redirect('/');
		}
	});
});

// show one animal
app.get('/animal/:id', function(req, res){
	Animal.findOne({_id: req.params.id}, function(err, animal){
		res.render('animal', {animal: animal});
	});
});
 
// delete one animal
app.post('/remove/:id', function(req, res){
	console.log(req.params.id);
	Animal.remove({_id: req.params.id}, function (err, animals){
    res.redirect('/');
	});
});

	// route to edit an animal
	app.get('/animal/:id/edit', function(req, res) {
	   Animal.findOne({_id: req.params.id}, function (err, animal){
	        res.render('edit', {animal: animal});
	        
	    })
	})

// update an animal
app.post('/update/:id', function(req, res){
	Animal.update({_id: req.params.id}, {name: req.body.name}, function(err, animal){
		res.redirect('/');
	});
});





	///////ROUTES END///////////////////

/////////////NODE PORT///////////////////
app.listen(8000, function() {
 console.log("listening on port 8000");
});
/////////////NODE PORT END///////////////////




