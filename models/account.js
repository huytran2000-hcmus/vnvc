const mongoose = require("mongoose");
const { Schema } = mongoose;

const accountShema = new Schema({
  phone: { type: String },
  password: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = model = mongoose.model("Account", accountShema);
