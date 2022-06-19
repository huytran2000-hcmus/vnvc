var express = require("express");
var router = express.Router();

const Topic = require("../controllers/topic");
router.get("/", Topic.getTopic);

module.exports = router;
