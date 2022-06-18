const { clearKey } = require("../services/cache");
var express = require("express");
var router = express.Router();

const CenterController = require("../controllers/center");

router.get("/", CenterController.getCenter);

module.exports = router;
