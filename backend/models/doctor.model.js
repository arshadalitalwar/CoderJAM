const mongoose = require("mongoose");
const doctorSchema = mongoose.Schema({
  name: { type: String, require: true },
  specialization: { type: String, require: true },
  url: { type: String, require: true },
  isAvailable: { type: Boolean, require: true },
});
  
const Doctor = mongoose.model("doctor", doctorSchema);

module.exports = Doctor;
