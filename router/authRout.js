const express = require("express");
const authRouter = express.Router();
const {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
  verifyOtp,
  getUser,
} = require("../controller/authController.js");

const jwtAuth = require("../middlewares/jwtAuth.js");

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/logout", logout);
authRouter.post("/forgotPassword", forgotPassword);
authRouter.post("/resetPassword/:forgetPasswordToken", resetPassword);
authRouter.post("/verifyOtp", verifyOtp);

authRouter.get("/user", jwtAuth, getUser);

module.exports = authRouter;
