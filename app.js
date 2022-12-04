const express = require("express");
const app = express();
const errorHandler = require("./middlewares/errorHandler.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// error handler function
app.use(errorHandler);

module.exports = app;
