const userModel = require("../model/userModel.js");
const bcrypt = require("bcyrpt");
const CustomError = require("../utils/custonErrorHandler.js");

module.exports = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const bcryptPass = await bcrypt(password, 10);
    const userInfo = new userModel({
      name,
      email,
      password: bcryptPass,
    });
    const result = await userInfo.save();
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};
