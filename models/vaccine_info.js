const mongoose = require("mongoose");
const { Schema } = mongoose;

const vaccine_infoShema = Schema({
  vaccine_id: { type: mongoose.ObjectId },
  preventions: { type: Array, min: 0, max: 100, item: String },
  subjects: { type: Array, min: 0, max: 100, item: String },
  instructions: { type: Array, min: 0, max: 100, item: String },
  contraindications: { type: Array, min: 0, max: 100, item: String },
  precautions: { type: Array, min: 0, max: 100, item: String },
  origin: { type: String },
});

module.exports = mongoose.model("Vaccine_info", vaccine_infoShema);
