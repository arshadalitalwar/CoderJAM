const express = require("express");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");
dotenv.config();
const userController = require("./controllers/user.controller");
const hospitalController = require("./controllers/hospital.controller");
const doctorController = require("./controllers/doctor.controller");

const connect = require("./config/db");

app.use("/user", userController);
app.use("/hospital", hospitalController);
app.use("/doctor", doctorController);

const port = process.env.PORT || 8000;
const start = async () => {
  await connect();
  app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
};
module.exports = start;

//chat
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors')

//const app = module.exports = express();
app.use(cors())

const server = http.createServer(app);
const io = socketio(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
  //console.log("New client connected");
  socket.on("chat",function(data){
    //console.log(data)
    io.emit("message",data)
  })
});

const PORT = 8100;
server.listen(PORT, () => console.log("Listening on 8100"));
