const mongoose = require("mongoose");
const { Schema } = mongoose;

const centerShema = new Schema({
  name: { type: String },
  address: [
    {
      street: { type: String },
      ward: { type: String },
      district: { type: String },
      province: { type: String },
    },
  ],
  coordinate: [
    {
      latitude: { type: String },
      longitude: { type: String },
    },
  ],
});

module.exports = model = mongoose.model("Center", centerShema);
