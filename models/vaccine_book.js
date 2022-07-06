const mongoose = require("mongoose");
const { Schema } = mongoose;

const vaccine_bookShema = Schema({
  total_amount: { type: mongoose.Types.Decimal128 },
  subject: {
    name: { type: String },
    birth_date: { type: Date },
    sex: { type: Boolean },
    street: { type: String },
    ward: { type: String },
    district: { type: String },
    province: { type: String },
  },
  contact: {
    name: { type: String },
    relationship: { type: String },
    phone: { type: String },
  },
  vaccine_packets: [
    {
      _id: mongoose.Types.ObjectId,
      name: { type: String },
    },
  ],
  vaccines: [
    {
      _id: mongoose.Types.ObjectId,
      name: { type: String },
    },
  ],
  center: {
    _id: mongoose.Types.ObjectId,
    name: { type: String },
  },
});

module.exports = mongoose.model("Vaccine_book", vaccine_bookShema);
