const Vaccine_book = require("../models/vaccine_book");
class vaccine_infoController {
  async getWithPhone(req, res) {
    try {
      let phone = req.phone;
      const data = await Vaccine_book.find({
        "contact.phone": phone,
      }).cache({ time: 60 * 60 * 24 });
      return res.json({ data: data });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}
module.exports = new vaccine_infoController();
