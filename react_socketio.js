const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const port = process.env.PORT || 4001;
//const index = require("./routes/index");
const app = express();
//app.use(index);
const server = http.createServer(app);
const io = socketIo(server);
const value = require('./const');

const client_details = {
  name: "",
  client_id: ""
}

var allList = new Map();

io.on('connection', function (socket) {
  console.log('user connected');
  console.log(socket.handshake.query);
  console.log(socket.handshake.query['username']);
  console.log(socket.handshake.query['to']);
  console.log(socket.id);
  client_details.name = socket.handshake.query['username'];
  client_details.client_id = socket.id;
  allList.set(client_details.name, client_details.client_id);
  console.log(allList);
  socket.on('chat message', function (msg) {
    console.log('message: ' + msg.msg);
    //io.emit('chat message', msg);
    if (allList.get(socket.handshake.query['to'])) {
      io.to(allList.get(socket.handshake.query['to'])).emit('chat message', msg);
      io.to(allList.get(socket.handshake.query['username'])).emit('chat message', msg);
    }
    else{
      console.log("User is Offline");
    }

  });
  socket.on('disconnect', function () {
    console.log('user disconnected', socket.id, socket.handshake.query['username']);
    allList.delete(socket.handshake.query['username']);
    console.log(allList);

  });
});




server.listen(4001, '10.224.238.153', () => console.log(`Listening on port ${port}`));