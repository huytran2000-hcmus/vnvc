const mongoose = require("mongoose");
const { clearKey } = require("../services/cache");
const Center = mongoose.model("Center");

module.exports = (app) => {
  app.get("/api/center", async (req, res) => {
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
  });
};
