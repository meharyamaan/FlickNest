const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendLinkEmail } = require("../utils/email");
const crypto = require("crypto");
require("dotenv").config();

//////////////signUp/////////////
const signUp = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).send({ message: "All field Required" });
  }
  if (password != confirmPassword) {
    return res.status(400).send({ message: "Password do not match" });
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).send({ message: "Email already exists" });
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashPassword,
      isVerified: true,
    });
    await newUser.save();
    res.status(200).send({ message: "User created successfully" });
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      return res.status(409).send({ message: "Email already exists" });
    }
    res.status(500).send({ message: "Error in creating user" });
  }
};

//////////////login/////////////
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: "Email and Passowrd Required" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send({ message: "Email not found" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).send({ message: "Invalid Credentials" });
  }
  try {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).send({ token, name: user.username });
  } catch (error) {
    res.status(500).send({ message: "Error in generating token" });
  }
};

//////////////Forgot Password/////////////
const forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send({ message: "Email is required" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  try {
    const resetToken = crypto.randomBytes(32).toString("hex");

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 15 * 60 * 1000;

    await user.save();

    const resetLink = `http://localhost:3000/reset-password/${resetToken}`;

    await sendLinkEmail(email, resetLink);
    res.status(200).send({ message: "Link Sent to Your Mail" });
  } catch (error) {
    res.status(500).send({ message: "Error in sending reset link" });
  }
};

///////////////////Reset Password////////////////
const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;
  if (!token || !newPassword) {
    return res
      .status(400)
      .send({ message: "Token and new password are required" });
  }

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).send({ message: "Invalid or expired token" });
    }

    const hashPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).send({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error resetting password" });
  }
};

module.exports = { signUp, login, forgotPassword, resetPassword };
