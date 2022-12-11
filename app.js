const express = require("express");
const app = express();
const errorHandler = require("./middlewares/errorHandler.js");
const mongoDbconnection = require("./config/database.js");
const authRouter = require("./router/authRout.js");
const eventRouter = require("./router/eventRouter.js");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:8081",
      "https://event-managmentmern-mern.up.railway.app"
    ],
    credentials: true
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
  })
);

// db connection
mongoDbconnection();
if (process.env.APP_TYPE === "porduction") {
  app.use(express.static(path.join(__dirname, "./client/build")));
  app.use("/api/auth", authRouter);
  app.use("/api", eventRouter);
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.use("/api/auth", authRouter);
  app.use("/api", eventRouter);
  app.get("/", (req, res) => {
    res.status(200).json({ success: true, data: "event managment server" });
  });
}

// console.log(path.resolve(__dirname, "client", "build", "index.html"));

// error handler function
app.use(errorHandler);
module.exports = app;
