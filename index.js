var express = require("express");
var socket = require("socket.io");
var app = express();
var server = app.listen(5000, function () {
  console.log("port 4000 is working");
});
app.use(express.static("public"));
var io = socket(server);
io.on("connection", function (socket) {
  console.log("socket on ");

  socket.on("chat", function (data) {
    io.sockets.emit("chat", data);
  });

  socket.on("typing", function (data) {
    socket.broadcast.emit("typing", handle.value);
  });
});
