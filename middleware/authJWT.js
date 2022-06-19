const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    let token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({ message: "You must login to access" });
    } else {
      token = token.replace("Bearer ", "");
    }
    const ACCESS_TOKEN_SECRET = "PTUDHTTHD";
    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  } catch (error) {
    return res.status(401).json({ message: "Server Internal Error" });
  }
};
module.exports = { verifyToken };
