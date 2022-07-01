const jwt = require("jsonwebtoken");

const generateToken = (phone) => {
  const ACCESS_TOKEN_SECRET = "PTUDHTTHD";

  const token = jwt.sign(
    {
      phone: phone,
    },
    ACCESS_TOKEN_SECRET,
    { expiresIn: "1d" }
  );
  return token;
};
module.exports = { generateToken };
