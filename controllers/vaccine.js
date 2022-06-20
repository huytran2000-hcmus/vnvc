const Vaccine = require("../models/vaccine");

class vaccineController {
  async searchVaccine(req, res) {
    try {
      let vaccine;
      const { search } = req.query;
      vaccine = await Vaccine.find({ $text: { $search: search } }).sort({
        score: { $meta: "textScore" },
      });
      return res.json({ data: vaccine });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}
module.exports = new vaccineController();
