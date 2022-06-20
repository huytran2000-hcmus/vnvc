const { clearKey } = require("../services/cache");
const Center = require("../models/center");

class CenterController {
  async getCenter(req, res) {
    let center;
    if (req.query.province) {
      center = await Center.find({
        "address.province": req.query.province,
      }).cache();
    } else {
      center = await Center.find().cache({
        time: 60,
      });
    }
    return res.json({ data: center });
  }
}
module.exports = new CenterController();
