const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const datingPoolController = require("./controllers/datingPoolController");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/dating-pool", datingPoolController);

app.get("/", (req, res) => {
  res.send("Welcome to Valley Vows");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not Found! Go to Homepage.");
});

module.exports = app;
