const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log("MongoDB connection failed", error.message);
    // console.log("Error Name:", error.name);
    // console.log("Error Stack:", error.stack);
    // console.log("Error Code:", error.code);

    process.exit(1);
  }
};
module.exports = connectDB;
