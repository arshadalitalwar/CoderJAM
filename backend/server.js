const express = require("express");
const app = express();
app.use(express.json());
const userController = require("./controllers/user.controller");
const hospitalController = require("./controllers/hospital.controller");
const doctorController = require("./controllers/doctor.controller");

const connect = require("./config/db");

app.use("/user", userController);
app.use("/hospital", hospitalController);
app.use("/doctor", doctorController);

const start = async () => {
  await connect();
  app.listen(8000, () => {
    console.log("Listening on 8000");
  });
};
module.exports = start;
