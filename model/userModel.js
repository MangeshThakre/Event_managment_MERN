const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Name is required"],
      maxLength: [50, "First must be less than 50 characters"],
    },
    lastName: {
      type: String,
      required: [true, "lastName is requierd"],
      maxLength: [50, "LastName be less than 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minLength: [8, "password must be at least 8 characters"],
      select: false,
    },
    forgetPasswordToken: String,
    forgetPasswordExpiry: Date,
    hashOtp: String,
    otpExpiry: Date,
  },
  { timestamps: true }
);

userSchema.methods = {
  comparePassword: async function (password) {
    return await bcrypt.compare(password, this.password);
  },

  generateJwtToken: function () {
    return JWT.sign({ _id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRY,
    });
  },

  generateForgetPasswordToken: function () {
    const forgetPasswordToken = crypto.randomBytes(64).toString("hex");
    this.forgetPasswordExpiry = new Date(Date.now() + 20 * 60 * 1000); // 20min
    this.forgetPasswordToken = forgetPasswordToken;
    return forgetPasswordToken;
  },
};

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
