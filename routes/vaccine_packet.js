var express = require("express");
var router = express.Router();

const Vaccine_packet = require("../controllers/vaccine_packet");
router.get("/", Vaccine_packet.searchVaccine);

module.exports = router;
