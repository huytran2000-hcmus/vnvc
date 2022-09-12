const Joi = require("joi");

const register = (data) => {
  const registerSchema = Joi.object({
    phone: Joi.string().min(10).max(12).required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{8,30}$"))
      .required(),
  });

  return registerSchema.validate(data);
};
module.exports = { register };
