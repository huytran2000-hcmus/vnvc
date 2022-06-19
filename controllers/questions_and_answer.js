const { clearKey } = require("../services/cache");
const Questions_and_answer = require("../models/questions_and_answer");
const Topic = require("../models/topic");
const _ = require("lodash");
class Questions_and_answerController {
  async getQuestion_and_answer(req, res) {
    try {
      const { topic } = req.query;
      if (!topic) {
        console.log("ERRR Here");
        const questions_and_answer = await Questions_and_answer.find().cache({
          time: 30,
        });
        return res.json({ data: questions_and_answer });
      }
      const questions_and_answer = await Questions_and_answer.find({
        topic: topic,
      }).cache();
      return res.json({ data: questions_and_answer });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
  async addQuestion_and_answer(req, res) {
    try {
      const { topic } = req.body;
      const isExist = await Topic.findOne({ name: topic });
      if (!isExist) {
        const newTopic = new Topic({ name: topic });
        await newTopic.save();
      }
      const { name, gender, age, email, phone, address, question } = req.body;
      const questions_and_answer = new Questions_and_answer({
        name: name,
        gender: gender,
        age: age,
        email: email,
        phone: phone,
        address: address,
        topic: topic,
        question: question,
      });
      const data = await questions_and_answer.save();
      console.log(data);
      return res.json({ data: data });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}
module.exports = new Questions_and_answerController();
