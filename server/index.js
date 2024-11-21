const express = require("express");
const app = express();

const connectDB = require("./config/Db");

app.get("/api", (req, res) => {
  res.send("api is running");
});

connectDB();

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
