var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [];

io.on('connection', function (socket) {
    for(var i in messages) {
      io.sockets.emit("display message", messages[i]);
    }
    socket.on("send coordinates", function (data) {
        messages.push(data);
        io.sockets.emit("display coordinates", data);
    });
 });
  

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);