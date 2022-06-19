const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  const ACCESS_TOKEN_SECRET = "PTUDHTTHD";

  const token = jwt.sign(
    {
      id: id.toString(),
    },
    ACCESS_TOKEN_SECRET,
    { expiresIn: "1d" }
  );
  return token;
};
const verifyToken = (req, res, next) => {
  try {
    let token = req.header("Authorization");
    console.log(token);

    if (!token) {
      throw new HttpException(401, "No token provided");
    } else {
      token = token.replace("Bearer ", "");
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        throw new HttpException(401, "Invalid or expired token");
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  } catch (error) {
    throw new HttpException(500, "Server Internal Error");
  }
};
module.exports = { generateToken, verifyToken };
