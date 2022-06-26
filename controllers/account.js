const Account = require("../models/account");
const { generateToken } = require("../services/authJWT");
const {
  setRedis,
  delRedis,
  isKeyExist,
  clearKey,
} = require("../services/cache");
class AccountController {
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
      if (account.password != password) {
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
