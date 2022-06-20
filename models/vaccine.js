const mongoose = require("mongoose");
const { Schema } = mongoose;

const vaccineShema = Schema({
  name: { type: String },
  price: { type: Number },
  description: { type: String },
  available: { type: Boolean },
});

module.exports = mongoose.model("Vaccine", vaccineShema);
