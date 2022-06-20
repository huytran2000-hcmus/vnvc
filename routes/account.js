var express = require("express");
var router = express.Router();

const AccountController = require("../controllers/account");
const { verifyToken } = require("../middleware/authJWT");
//router.post("/register", AccountController.register);

router.post("/login", AccountController.login);
//
router.post("/logout", verifyToken, AccountController.logout);
module.exports = router;
