const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  hospital:{ type: Object, require: true },
  doctor:{ type: Object, require: true }
});

const User = mongoose.model("user", userSchema);

module.exports = User;
