// require express and path
var express = require("express");
var path = require("path");
// create the express app
var app = express();
// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded());

var count = 1;
// static content 
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})
// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
})

// this gets the socket.io module *new code!* 
var io = require('socket.io').listen(server)  // notice we pass the server object<br>


// Whenever a connection event happens (the connection event is built in) run the following code
io.sockets.on('connection', function (socket) {
	//console.log("WE ARE USING SOCKETS!");
	//console.log(socket.id);
  
  // info submitted from form
  socket.on("click_count", function (data){
  	count += 1;
  	io.emit('updated_count', {response: count});
  })

   socket.on("reset_func", function (data){
   	console.log("reset button has been clicked")
   	count = 0;
  	io.emit('reset_btn', {response: count});
  })
  	
  	
  


  	//io.emit('reset_count'{reset: count });

})
