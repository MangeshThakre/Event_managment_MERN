const express = require("express");
const eventRouter = express.Router();
const { addEvent } = require("../controller/eventcontroller.js");
const clouninaryImageUpload = require("../middlewares/cloudinaryImageUpload");
const jwtAuth = require("../middlewares/jwtAuth.js");

eventRouter.route("/event").post(jwtAuth, clouninaryImageUpload, addEvent);

module.exports = eventRouter;
