const mongoose = require("mongoose");
const { Schema } = mongoose;

const Vaccine_packetShema = Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  available: { type: Boolean, default: false },
  vaccines: [
    {
      name: { type: String },
      price: { type: Number },
    },
  ],
  category_id: { type: mongoose.ObjectId },
  category_name: { type: String },
  subcategory_name: { type: String },
});

module.exports = mongoose.model("Vaccine_packet", Vaccine_packetShema);
