const Vaccine_packet = require("../models/vaccine_packet");

class Vaccine_packetController {
  async searchVaccine(req, res) {
    try {
      let vaccine_packet;
      const { name, category_name, subcategory_name } = req.query;
      vaccine_packet = await Vaccine_packet.find({
        $text: { $search: name },
        category_name: category_name,
        subcategory_name: subcategory_name,
      });
      return res.json({ data: vaccine_packet });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}
module.exports = new Vaccine_packetController();
