const Vaccine_book = require("../models/vaccine_book");
const {
  isDuplicate,
  isExistVaccine_packet,
  isExistVaccine,
} = require("../services/helper.js");
class vaccine_infoController {
  async getWithPhone(req, res) {
    try {
      let phone = req.phone;
      const data = await Vaccine_book.find({
        "contact.phone": phone,
      }).cache({ time: 60 * 60 * 24 });
      return res.json({ data: data });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err.message });
    }
  }
  async addVaccineBook(req, res) {
    try {
      const { subject, contact, center } = req.body;
      let { vaccine_packets, vaccines } = req.body;

      const isDuplicatePacket = isDuplicate(vaccine_packets);
      //check duplicated vaccine_packets
      if (isDuplicatePacket) {
        return res
          .status(500)
          .json({ message: "vaccince packets is duplicated" });
      }

      const isDuplicateVaccine = isDuplicate(vaccines);
      //check duplicated vaccince
      if (isDuplicateVaccine) {
        return res.status(400).json({ message: "vaccince is duplicated" });
      }

      const totalPackets = await isExistVaccine_packet(vaccine_packets);
      if (!totalPackets) {
        return res
          .status(400)
          .json({ message: "vaccince Packets is not found" });
      }

      const totalVaccines = await isExistVaccine(vaccines);
      if (!totalVaccines) {
        return res
          .status(400)
          .json({ message: "vaccince Packets is not found" });
      }
      const total_amount = totalVaccines + totalPackets;
      const newVaccine_book = new Vaccine_book({
        total_amount,
        subject,
        contact,
        vaccine_packets,
        vaccines,
        center,
      });
      await newVaccine_book.save();
      return res.status(200).json({ message: "add vaccine_book successful" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}
module.exports = new vaccine_infoController();
