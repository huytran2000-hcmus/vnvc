var express = require("express");
var router = express.Router();
const { verifyToken } = require("../middleware/authJWT");

const Vaccine_book = require("../controllers/vaccine_book");
router.get("/", verifyToken, Vaccine_book.getWithPhone);

module.exports = router;
