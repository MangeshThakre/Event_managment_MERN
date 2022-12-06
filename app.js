const express = require("express");
const app = express();
const errorHandler = require("./middlewares/errorHandler.js");
const mongoDbconnection = require("./config/database.js");
const authRouter = require("./router/authRout.js");
const eventRouter = require("./router/eventRouter.js");
const fileUpload = require("express-fileupload");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
  })
);

// db connection
mongoDbconnection();

app.use("/api/auth", authRouter);
app.use("/api", eventRouter);

// error handler function
app.use(errorHandler);
module.exports = app;
