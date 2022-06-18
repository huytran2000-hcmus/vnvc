const mongoose = require("mongoose");
const { Schema } = mongoose;

const topicShema = Schema({
  name: { type: String },
});

module.exports = mongoose.model("Topic", topicShema);
