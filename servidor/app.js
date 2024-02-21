const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Como tan muchachos?");
});

module.exports = app;
