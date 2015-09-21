$(document).ready(function(){
	var socket = io.connect();

	var name = prompt("Add your name to the chat room");

	
	// new user information
	socket.emit('add_user', {name: name });
	// appeneds new user information
	socket.on('new_user', function(data){
		console.log(data.response);
	
		$('#chat-container').append('<p>' + data.response.name + ' has joined the chat!</p>')
	});
	// welcomes new user
	socket.on('welcome_user', function(data){
		$('#chat-container').append('<p> Welcome to the chat room ' + data.response.name + '!</p>')
	});

	$('form').submit(function(event){
		event.preventDefault();

		// user message information
		socket.emit('user_message', {message: $('#user-message').val(), name: name});

	});
		// print message to the page
		socket.on('message', function(data){
			console.log(data.response);
			

			$('#chat-container').append('<p>' + data.response.name + " said: " +  data.response.message + '</p>');
		});

		socket.emit('disconnect', {name: name});
		// socket.on('user_disconnect' function(data){
		// 	console.log(data.response);
		// })
});
	
