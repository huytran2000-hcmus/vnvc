const mongoose = require("mongoose");
const { Schema } = mongoose;

const questions_and_answerShema = Schema({
  name: { type: String },
  gender: { type: String },
  age: { type: Number },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  topic: { type: String },
  question: { type: String },
  answer: { type: String },
});

module.exports = mongoose.model(
  "Questions_and_answers",
  questions_and_answerShema
);
