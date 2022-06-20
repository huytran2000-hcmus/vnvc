const Vaccine_categories = require("../models/vaccine_categories");

class Vaccine_categoriesController {
  async getAll(req, res) {
    try {
      let vaccine_categories;
      vaccine_categories = await Vaccine_categories.find().cache({
        time: 60 * 60 * 24,
      });
      console.log("DDAD");

      console.log(vaccine_categories);
      return res.json({ data: vaccine_categories });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}
module.exports = new Vaccine_categoriesController();
