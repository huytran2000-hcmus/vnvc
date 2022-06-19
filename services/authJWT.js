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
module.exports = { generateToken };
