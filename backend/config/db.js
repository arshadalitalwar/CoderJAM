const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/coderjam", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
};
module.exports = connect;
