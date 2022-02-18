const path = require('path');
let express = require("express");
let app = express();

//var app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);
let projectsRoute = require('./routes')

var port = process.env.PORT || 8080;
var res_back = null

app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.use("/api", projectsRoute)

app.get("/two", function(req, res) {
  console.log('-> server recv: two')
  res.sendFile(path.join(__dirname, '/public/two'))
})

app.get("/book", function(req, res) {
  console.log("-> server recv: book")
  res.sendFile(path.join(__dirname, '/public/book'))
})

//socket test
io.on('connection', (socket) => {
  console.log('a user connected');
  let randomN = parseInt(Math.random() * 10)
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.emit("newMsg", `socket num - ${randomN}`)
});

http.listen(port, ()=>{
  console.log("Server Listening on port ", port);
});