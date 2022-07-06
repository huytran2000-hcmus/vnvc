const { register } = require("./validation");

const registerValidator = (req, res, next) => {
  console.log("adad", register(req.body));
  const { error } = register(req.body);
  if (error) {
    return res.status(500).json({ message: validation.ERRR });
  }
  next();
};
module.exports = { registerValidator };
