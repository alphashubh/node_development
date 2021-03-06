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
// io.on("connection", socket => {
//     console.log('User connected');  
//   socket.on("chat message", (msg) => {
//     console.log(msg);
//     //io.emit('chat message', msg);
//     io.emit('chat message', msg);
//   })
//   socket.on("disconnect", () => console.log("Client disconnected"));
// });

io.on('connection', function(socket){
    console.log('user connected');
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

const getApiAndEmit = async socket => {
  try {
    var i = 1;
    var temp = value.sssss.temp_value;
    console.log(temp);
    // const res = await axios.get(
    //   "https://api.darksky.net/forecast/PUT_YOUR_API_KEY_HERE/43.7695,11.2558"
    // );
    socket.emit("FromAPI", temp);
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};
server.listen(4001, '10.224.238.153', () => console.log(`Listening on port ${port}`));