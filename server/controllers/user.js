const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Signup = async (req, res) => {
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
    res.status(500).send({ message: "Error in creating user" });
  }
};

const Login = async (req, res) => {
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

module.exports = { Signup, Login };
