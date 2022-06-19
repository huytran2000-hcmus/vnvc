var express = require("express");
var router = express.Router();

const AccountController = require("../controllers/account");

//router.post("/register", AccountController.register);

router.post("/login", AccountController.login);
//
module.exports = router;
