 $(document).ready(function (){
            // this triggers the connection event in our server!
            var socket = io.connect();
            // we'll write all the socket stuff after the above line!
            $('button').click(function (){
                socket.emit("button_clicked", {reason: "because I want to learn about sockets!"});
            });

            socket.on('server_response', function (data){
                console.log('The server says: ' + data.response);
            });
        })