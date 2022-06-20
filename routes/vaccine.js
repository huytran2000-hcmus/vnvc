var express = require("express");
var router = express.Router();

const Vaccine = require("../controllers/vaccine");
router.get("/", Vaccine.searchVaccine);

module.exports = router;
