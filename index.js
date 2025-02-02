const http=require("http");
const path=require("path");
const { Server } = require("socket.io");

const express=require("express");
const { resolve } = require("path");
const app=express();
const server=http.createServer(app);

const io = new Server(server);

// handling Socket.io 
io.on("connection", (socket) => {
    socket.on("user-message", (message) => {
      io.emit("message",message);
    });
  });

app.use(express.static(path.resolve("./public")));

app.get("/",(req,res)=>{
    return res.sendFile("/public/index.html")
})

server.listen(9000,()=>{console.log(`Server has started listening on the port: 9000`)});