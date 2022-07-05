const Account = require("../models/account");
const bcrypt = require("bcryptjs");

const { generateToken } = require("../services/authJWT");
const {
  setRedis,
  delRedis,
  isKeyExist,
  clearKey,
} = require("../services/cache");
class AccountController {
  register = async (req, res, next) => {
    try {
      const { phone, password } = req.body;
      const isExist = await Account.findOne({ phone: phone });
      if (isExist) {
        return res.status(400).json({ message: "phone is Exist" });
      }
      const salt = bcrypt.genSaltSync(8);
      const passwordHash = bcrypt.hashSync(password, salt);
      const account = new Account({ phone, password: passwordHash });
      await account.save();
      return res.status(200).json({ message: "Account create success" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error creating account" });
    }
  };
  login = async (req, res, next) => {
    try {
      const { phone, password } = req.body;
      if (!phone || !password) {
        return res
          .status(403)
          .json({ message: "phone,password must required" });
      }
      const account = await Account.findOne({ phone: phone });
      if (!account) {
        return res.status(403).json({ message: "Account not found" });
      }
      const isValidPassword = await bcrypt.compare(password, account.password);

      if (!isValidPassword) {
        return res.status(403).json({ message: "Password not found" });
      }
      const token = await generateToken(account.phone);
      const key = "phone:" + account.phone;

      setRedis(key.toString(), token, 60 * 60 * 2);
      return res
        .status(200)
        .json({ message: "login successful", token: token });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  logout = async (req, res, next) => {
    try {
      const phone = req.phone;
      const key = "phone:" + phone;

      delRedis(key);
      clearKey("vaccine_books");
      return res.status(200).json({ message: "logout successful" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}
module.exports = new AccountController();
