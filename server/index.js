const express = require("express");
const router = require("./routes/route");
const app = express();

const connectDB = require("./config/Db");
app.use(express.json());
app.use("/api", router);

connectDB();

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
