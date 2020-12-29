const express = require("express");
const app = express();
const urlRouter = require("./routes/urlRouter");

app.use(express.json());

app.use("/api/v1/urls", urlRouter);

module.exports = app;
