const mongoose = require("mongoose");
const { Schema } = mongoose;

const centerShema = new Schema({
  name: String,
  address: [
    {
      street: String,
      ward: String,
      district: String,
      province: String,
    },
  ],
  coordinate: [
    {
      latitude: String,
      longitude: String,
    },
  ],
});

mongoose.model("Center", centerShema);
