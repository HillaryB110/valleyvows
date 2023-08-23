const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const datingPoolController = require("./controllers/datingPoolController");
const userProfileController = require("./controllers/userProfileController");
const giftSentController = require("./controllers/giftSentController");
const userGiftController = require("./controllers/userGiftController");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/dating-pool", datingPoolController);
app.use("/profile", userProfileController);
app.use("/gift-sent", giftSentController);
app.use("/user-gifts",userGiftController);

app.get("/", (req, res) => {
  res.send("Welcome to Valley Vows");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not Found! Go to Homepage.");
});

module.exports = app;
