var express = require("express");
var router = express.Router();

const AccountController = require("../controllers/account");
const VaccineBookController = require("../controllers/vaccine_book");
const { verifyToken } = require("../middleware/authJWT");
//router.post("/register", AccountController.register);

router.post("/login", AccountController.login);
router.get("/vaccine_book", verifyToken, VaccineBookController.getWithPhone);
router.post("/logout", verifyToken, AccountController.logout);
module.exports = router;
