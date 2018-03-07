const express= require('express');
const cors= require('cors');
const bodyparser=require('body-parser');
const app=express();
var server = require('http').createServer(app);
const io=require('socket.io')(server);


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


app.use(cors());
app.use(bodyparser.json());

app.get('/', (req,res) => {
    //res.json("Express running on port 3000");
    res.sendFile(__dirname + '/index.html');

})
server.listen(3000, () => {
    console.log('server started on localhost 3000')
})