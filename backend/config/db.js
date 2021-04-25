const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect("mongodb+srv://coderjam:coderjam@covid.odjkg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) 
};
module.exports = connect;
