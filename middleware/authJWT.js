const jwt = require("jsonwebtoken");
const { isKeyExist } = require("../services/cache");
const verifyToken = (req, res, next) => {
  try {
    let token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({ message: "You must login to access" });
    } else {
      token = token.replace("Bearer ", "");
    }
    const ACCESS_TOKEN_SECRET = "PTUDHTTHD";
    jwt.verify(token, ACCESS_TOKEN_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
      } else {
        const key = "phone:" + decoded.phone;
        const isRedis = await isKeyExist(key);
        if (!isRedis) {
          return res.status(200).json({ message: "You not login" });
        }
        req.phone = decoded.phone;
        next();
      }
    });
  } catch (error) {
    return res.status(401).json({ message: "Server Internal Error" });
  }
};
module.exports = { verifyToken };
