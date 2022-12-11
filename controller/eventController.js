const { response } = require("express");
const { findByIdAndUpdate } = require("../model/eventModel.js");
const eventModel = require("../model/eventModel.js");
const userModel = require("../model/userModel.js");
const CustomError = require("../utils/custonErrorHandler.js");

/******************************************************
 * @addEvent
 * @route http://localhost:8081/api/addEvent
 * @description create new event
 * @formData  title, description, email,  city, address, organizerName, status, publishDate, images(min-1, max-4)
 * @returns success message , event data object
 ******************************************************/

const addEvent = async (req, res, next) => {
  const {
    title,
    description,
    email,
    city,
    address,
    phone,
    organizerName,
    status,
    publishDate
  } = req.body;
  const images = req.user.images;

  const eventInfo = new eventModel({
    userId: req.user._id,
    title,
    images,
    description,
    email,
    phone,
    city,
    address,
    organizerName,
    likes: [],
    status: status == "true" ? true : false,
    publishDate: new Date(publishDate)
  });

  const eventUrl = `${process.env.CLIENT_URL}/window/${eventInfo._id}`;

  try {
    const newEvent = await eventInfo.save();
    res.status(200).json({ success: true, data: newEvent, link: eventUrl });
    // res.status(200).json({ success: true });
  } catch (error) {
    return next(error);
  }
};

// /******************************************************
//  * @editEvent
//  * @route http://localhost:8081/api/editEvent
//  * @description edit event
//  * @parameters
//  * @returns success message , event data object
//  ******************************************************/

const editEvent = async (req, res, next) => {
  req.body["images"] = req.user.images;
  req.body["status"] = req.body.status == "false" ? false : true;
  req.body["publishDate"] = new Date(req.body.publishDate);
  req.body["likes"] = JSON.parse(req.body.likes);

  try {
    const result = await eventModel.findByIdAndUpdate(
      req.body.eventId,
      req.body,

      { runValidators: true, new: true }
    );
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    return next(error);
  }
};

/******************************************************
 * @getEvent
 * @route http://localhost:8081/api/getEvent
 * @description get single event
 * @querys eventId
 * @returns success message , event data object
 ******************************************************/

const getEvent = async (req, res, next) => {
  const { eventId } = req.query;
  if (!eventId) return next(new CustomError("Event Id is Required", 400));
  try {
    const event = await eventModel.findById(eventId);
    if (!event) {
      return next(new CustomError("Invalid Id", 400));
    }
    res.status(200).json({ success: true, data: event });
  } catch (error) {
    next(error);
  }
};

/******************************************************
 * @getEvents
 * @route http://localhost:8081/api/addEvents
 * @description  get filtered event
 * @query to(date) ,from(date) , search , page, limeit ,city
 * @returns success message , filtered events data object
 ******************************************************/

const getEvents = async (req, res, next) => {
  const { search, from, to, page, limit, city } = req.query;
  if (from || to) {
    if (new Date(from) === "Invalid Date" || new Date(to) === "Invalid Date") {
      return next(CustomError("Invalid Date", 400));
    }
  }

  const PAGE = Number(page) || 1;
  const LIMIT = Number(limit) || 10;
  const startIndex = (PAGE - 1) * LIMIT;
  const endIndex = PAGE * LIMIT;

  const filterQuery = {};
  if (search) filterQuery["title"] = { $regex: search, $options: "i" };
  if (city) filterQuery["city"] = city;
  if (from && to)
    filterQuery["createdAt"] = {
      $gt: new Date(from).toISOString(),
      $lt: new Date(to).toISOString()
    };

  try {
    const totalEvents = await eventModel.find().countDocuments();
    const result = {};
    if (endIndex < totalEvents) {
      result.next = {
        pageNumber: PAGE + 1,
        limit: LIMIT
      };
    }
    if (startIndex > 0) {
      result.previous = {
        pageNumber: PAGE - 1,
        limit: LIMIT
      };
    }

    result.data = await eventModel
      .find(filterQuery)
      .skip(startIndex)
      .limit(limit);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    return next(error);
  }
};

/******************************************************
 * @deleteEvent
 * @route http://localhost:8081/api/event
 * @description  delete the event by event id
 * @body eventId
 * @returns success message
 ******************************************************/

const deleteEvent = async (req, res, next) => {
  const { eventId } = req.body;
  if (!eventId) return next(new CustomError("Event Id is required", 400));
  try {
    const result = await eventModel.findByIdAndDelete(eventId);
    if (!result) return next(new CustomError("Invalid id", 400));
    return res
      .status(200)
      .json({ success: true, message: "successfuly deleted the Event" });
  } catch (error) {
    next(error);
  }
};

/******************************************************
 * @getDistinctCities
 * @route http://localhost:8081/api/cities
 * @description  get all distinct cities
 * @returns return  distinct cities arr
 ******************************************************/

const getDistinctCities = async (req, res, next) => {
  try {
    const distinctCities = await eventModel.distinct("city");
    res.status(200).json({ success: true, data: distinctCities });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addEvent,
  editEvent,
  getEvent,
  getEvents,
  deleteEvent,
  getDistinctCities
};
