const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const getUSerDetailsFromToken = require("../helpers/getUsersDetailsFromToken");

const app = express();

// socket connection
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    credentials: true,
  },
});

// socket running at port 5000

// online user
const onlineUser = new Set();

io.on("connection", async (socket) => {
  console.log("connected user", socket.id);

  const token = socket.handshake.auth.token;

  //current user details
  const user = await getUSerDetailsFromToken(token);

  //create a room
  socket.join(user?._id);
  onlineUser.add(user?._id);

  io.emit("onlineUser", Array.from(onlineUser));

  //disconnect
  socket.on("disconnect", () => {
    onlineUser.delete(user?._id);
    console.log("user disconnected", socket.id);
  });
});

module.exports = {
  app,
  server,
};
