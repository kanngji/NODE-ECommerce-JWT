const express = require("express");
const app = express();
const mongoose = require("mongoose");
// .env 쓰기위한
const dotenv = require("dotenv");

const userRoute = require("./routes/user");

dotenv.config();

// mongo db 연결하기
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successful"))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use("/api/users", userRoute);

const PORT = 5000;
app.use("/", (req, res) => {
  res.send("hi");
});
app.listen(PORT, () => {
  console.log(`This server is running at ${PORT}`);
});
