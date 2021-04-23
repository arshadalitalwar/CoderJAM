const mongoose = require("mongoose");
const hospitalSchema = mongoose.Schema({
  name: { type: String, require: true },
  address: { type: String, require: true },
  lat_lon: [{ type: Number, require: true }],
  no_of_beds: { type: Number, require: true },
  no_of_oxygens: { type: Number, require: true },
  isCovid: { type: Boolean, require: true },
});

const Hospital = mongoose.model("hospital", hospitalSchema);

module.exports = Hospital;
