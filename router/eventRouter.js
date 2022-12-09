const express = require("express");
const eventRouter = express.Router();
const {
  addEvent,
  getEvent,
  getEvents,
  editEvent,
  deleteEvent
} = require("../controller/eventController.js");
const cloudinaryImageUpload = require("../middlewares/cloudinaryImageUpload");
const jwtAuth = require("../middlewares/jwtAuth.js");

eventRouter
  .route("/event")
  .post(jwtAuth, cloudinaryImageUpload, addEvent)
  .patch(jwtAuth, cloudinaryImageUpload, editEvent)
  .get(getEvent)
  .delete(jwtAuth, deleteEvent);

eventRouter.get("/events", jwtAuth, getEvents);

module.exports = eventRouter;
