const Vaccine = require("../models/vaccine");
const Vaccine_info = require("../models/vaccine_info");
class vaccine_infoController {
  async getInfoVaccine(req, res) {
    try {
      let { name } = req.query;
      const vaccine = await Vaccine.findOne({ name: name }).cache({ time: 30 });
      const info_vaccine = await Vaccine_info.findOne({
        vaccine_id: vaccine._id,
      }).cache({ time: 30 });
      const data = {
        preventions: info_vaccine.preventions,
        subjects: info_vaccine.subjects,
        contraindications: info_vaccine.contraindications,
        instructions: info_vaccine.instructions,
        origin: info_vaccine.origin,
        name: vaccine.name,
        price: vaccine.price,
        description: vaccine.description,
        available: vaccine.available,
      };
      return res.json({ data: data });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}
module.exports = new vaccine_infoController();
