var express = require("express");
var router = express.Router();

const Vaccine_info = require("../controllers/vaccine_info");
router.get("/", Vaccine_info.getInfoVaccine);

module.exports = router;
