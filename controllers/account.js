const Account = require("../models/account");
const { generateToken } = require("../services/authJWT");
const { setRedis } = require("../services/cache");

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
      const token = await generateToken(account._id);
      const key = "phone:" + account.phone;
      setRedis(key, token, 60 * 60 * 2);
      return res
        .status(200)
        .json({ message: "login successful", token: token });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
  // logout = async (req, res, next) => {
  //   try {

  //   } catch (error) {
  //     console.log(error);
  //     next(error);
  //   }
  // };
}
module.exports = new AccountController();
