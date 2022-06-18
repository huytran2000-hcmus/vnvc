const { clearKey } = require("../services/cache");
const Center = require("../models/center");

class CenterController {
  async getCenter(req, res) {
    let center;
    if (req.query.province) {
      center = await Center.find({
        "address.province": req.query.province,
      }).cache();
      console.log(typeof center);
    } else {
      center = await Center.find().cache({
        time: 10,
      });
    }
    return res.json({ data: center });
  }
}
module.exports = new CenterController();
