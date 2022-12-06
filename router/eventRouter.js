const express = require("express");
const eventRouter = express.Router();
const { addEvent, getEvent } = require("../controller/eventController.js");
const cloudinaryImageUpload = require("../middlewares/cloudinaryImageUpload");
const jwtAuth = require("../middlewares/jwtAuth.js");

eventRouter
  .route("/event")
  .get(jwtAuth, getEvent)
  .post(jwtAuth, cloudinaryImageUpload, addEvent);

module.exports = eventRouter;
