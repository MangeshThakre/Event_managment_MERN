const userModel = require("../model/userModel.js");
const CustomError = require("../utils/custonErrorHandler.js");
const cookieOptions = require("../utils/cookieOptions.js");
const transporter = require("../config/transporter.config.js");
const bcrypt = require("bcrypt");

/******************************************************
 * @REGISTER
 * @route http://localhost:8081/api/auth/register
 * @description User register Controller for creating new user
 * @body firstname , lastname,  email, password ,comfirmPassword
 * @returns User Object
 ******************************************************/

const register = async (req, res, next) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return next(
      new CustomError("password and confirmPassword not matched", 400)
    );
  }

  try {
    const hashPass = await bcrypt.hash(password, 10);
    const userInfo = new userModel({
      firstName,
      lastName,
      email,
      password: hashPass
    });
    const result = await userInfo.save();
    res
      .status(200)
      .json({ success: true, message: "successfuly resisterd new user " });
  } catch (error) {
    next(error);
  }
};

/******************************************************
 * @LOGIN
 * @route http://localhost:8081/api/auth/login
 * @description User login Controller for loging new user
 * @parameters  email, password
 * @returns User Object , and cookie with token
 ******************************************************/

const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new CustomError("Email and Password is Required", 400));
  }
  try {
    const user = await userModel.findOne({ email }).select("+password");

    // check user exist
    if (!user) {
      return next(new CustomError("User Not Found ", 404));
    }

    // check password is correct
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      return next(new CustomError("Invalid credentials", 400));
    }
    console.log(isPasswordCorrect);

    const expiryDate = new Date(Date.now() + 2 * 60 * 1000); // 2min
    const OTP = Math.floor(Math.random() * 9999).toString();
    const hashOtp = await bcrypt.hash(OTP, 10);

    user.hashOtp = hashOtp;
    user.otpExpiry = expiryDate;

    // create mail content
    const mailOptions = {
      from: process.env.EMAIL_ID,
      to: user.email,
      subject: "Event managment Login OTP",
      html: `<b>Hello ${user.firstName}  ${user.lastName}</b><br>
         <p>here is your login OTP : ${OTP}  do not share the otp to any one</p>`
    };

    // send mail
    transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        user.hashOtp = user.otpExpiry = undefined;
        await user.save();
        return next(error);
      } else {
        await user.save();
        res.status(200).json({
          success: true,
          message: `OTP sent to ${user.email}`,
          expiryDate
        });
      }
    });
  } catch (error) {
    next(error);
  }
};

/******************************************************
 * @verifyOtp
 * @route http://localhost:8081/api/auth/verifyOtp
 * @description User verifyOtp Controller
 * @parameters  otp
 * @returns User Object , and cookie with token
 ******************************************************/

const verifyOtp = async (req, res, next) => {
  const { otp, email } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) return new CustomError("User not Found", 400);

    // check otp is  expire or not
    const isOtpExpired = user.otpExpiry < new Date(Date.now());
    if (isOtpExpired) {
      user.otpExpiry = undefined;
      user.hashOtp = undefined;
      await user.save({ validateBeforeSave: false });
      return next(new CustomError("Time Out Resend OTP"));
    }

    // check opt is correct or not
    const isOtpCorrect = await bcrypt.compare(otp.toString(), user.hashOtp);
    if (!isOtpCorrect) return new CustomError("Invalid OTP", 400);
    user.otpExpiry = undefined;
    user.hashOtp = undefined;
    await user.save();
    const token = user.generateJwtToken();

    res
      .status(200)
      .cookie("Token", token, cookieOptions)
      .json({ success: true, message: "OTP  Matched" });
  } catch (error) {
    next(error);
  }
};

/******************************************************
 * @LOGOUT
 * @route http://localhost:8081/api/auth/logout
 * @description User logout bby clearing user cookies
 * @parameters
 * @returns success message
 ******************************************************/

const logout = async (req, res, next) => {
  res.cookie("Token", null, {
    expires: new Date(Date.now()),
    httpOnly: true
  });
  res.status(200).json({ success: true, message: "Logged Out" });
};

/******************************************************
 * @FORGETPASSWORD
 * @route http://localhost:8081/api/auth/forgotPassword
 * @description send email to user
 * @body email
 * @returns success message , send reset password mail with reset url
 ******************************************************/

const forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  if (!email) return next(new CustomError("Email is Required", 400));
  try {
    // check user
    const user = await userModel.findOne({ email });
    if (!user) return next(new CustomError("User Not Found", 404));

    // generate  forgotToken ,  fotGotTokenExp date and store in data base
    const forgotPasswordToken = user.generateForgotPasswordToken();
    await user.save();

    //  create  reset url
    const resetURL = `${process.env.CLIENT_URL}/reset_password/${forgotPasswordToken}`;

    // create mail content
    const mailOptions = {
      from: process.env.EMAIL_ID,
      to: user.email,
      subject: "Event managment Reset password",
      html: `<b>Hello ${user.firstName}  ${user.lastName}</b><br>
         <a href="${resetURL}" target ="_blank" >Click here to reset password</a>`
    };

    // send email
    transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        user.forgotPasswordToken = undefined;
        user.forgotPasswordExpiry = undefined;
        await user.save();
        return next(error);
      }
      return res
        .status(200)
        .json({ success: true, message: "check you email" });
    });
  } catch (error) {
    return next(error);
  }
};

/******************************************************
 * @resetPassword
 * @route http://localhost:8081/api/auth/forgotPassword
 * @description send cookie to user
 * @body forgotPasswordToken, password, confirmPassword
 * @returns success message + cookie
 ******************************************************/

const resetPassword = async (req, res, next) => {
  const { forgotPasswordToken } = req.params;
  const { password, confirmPassword } = req.body;
  try {
    if (!password || !confirmPassword) {
      return next(
        new CustomError("password and conform Password is Required", 400)
      );
    }

    if (password !== confirmPassword) {
      return next(
        new CustomError("password and confirm password does not match", 400)
      );
    }

    // check user is exist
    const user = await userModel.findOne({
      forgotPasswordToken,
      forgotPasswordExpiry: { $gt: new Date(Date.now()) }
    });
    if (!user) {
      return next(
        new CustomError("forgot password token is invalid or expired", 400)
      );
    }

    // create hash password and and store in database
    const hashPass = await bcrypt.hash(password, 10);
    user.password = hashPass;
    user.forgotPasswordToken = undefined;
    user.forgotPasswordExpiry = undefined;
    await user.save();
    // create jwt token and send  to client,
    const token = user.generateJwtToken();
    res.status(200).cookie("Token", token, cookieOptions).json({
      success: true,
      message: "successfuly updated the password",
      Token: token
    });
  } catch (error) {
    return next(error);
  }
};

/******************************************************
 * @getuser
 * @route http://localhost:8081/api/auth/user
 * @description send user data
 * @parameters
 * @returns success message , user data object
 ******************************************************/

const getUser = async (req, res, next) => {
  const userId = req.user._id;
  try {
    const user = await userModel.findById(userId);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
  verifyOtp,
  getUser
};
