// require express and path
var express = require("express");
var path = require("path");
// create the express app
var app = express();
// static content 
app.use(express.static(path.join(__dirname, "./static")));






// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
	res.render("index");
})





// this selects our port *old code!*
var server = app.listen(8000, function() {
	console.log("listening on port 8000");
})

// this gets the socket.io module *new code!* 
var io = require('socket.io').listen(server)  // notice we pass the server object<br>


// Whenever a connection event happens (the connection event is built in) run the following code
io.sockets.on('connection', function (socket) {
	console.log("WE ARE USING SOCKETS!");
	console.log(socket.id);
  //all the socket code goes in here!
  socket.on("button_clicked", function (data){
  	console.log('Someone clicked a button!  Reason: ' + data.reason);
  	socket.emit('server_response', {response: "sockets are the best!"});
  })

})


