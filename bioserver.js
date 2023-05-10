const express = require("express");
const socket = require("socket.io");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const userRouter = require("./src/routes/bioRoutes");

app.use("/biopass", userRouter);

const server = app.listen(port);

const io = socket(server, { cors: { origin: "*" } });
const clients = io.sockets.sockets;
if (clients.size > 0) {
  const client = clients.values().next().value;
  const wsServerUrl = client.conn.remoteAddress + ":" + client.conn.remotePort;
  console.log("WebSocket server URL:", wsServerUrl);
}
io.on("connection", (socket) => {
  console.log("New socket connection: " + socket.id);
  socket.on("checkSocket", () => {
    console.log("worked socket");
    io.emit("checkSocket", "worked Sockets");
  });

  socket.on("Authenticate", (data) => {});
});
