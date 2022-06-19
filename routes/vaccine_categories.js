var express = require("express");
var router = express.Router();

const Vaccine_categories = require("../controllers/vaccine_categories");
router.get("/", Vaccine_categories.getAll);

module.exports = router;
