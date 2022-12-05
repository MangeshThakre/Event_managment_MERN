const express = require("express");
const app = express();
const errorHandler = require("./middlewares/errorHandler.js");
const mongoDbconnection = require("./config/database.js");
const authRouter = require("./router/authRout.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection
mongoDbconnection();

app.use("/api/auth", authRouter);

// error handler function
app.use(errorHandler);
module.exports = app;
