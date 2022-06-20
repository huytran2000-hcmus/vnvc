const Topic = require("../models/topic");

class TopicController {
  async getTopic(req, res) {
    try {
      let topic;
      topic = await Topic.find().cache({
        time: 30,
      });
      return res.json({ data: topic });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}
module.exports = new TopicController();
