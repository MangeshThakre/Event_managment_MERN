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
    city,
    address,
    organizerName,
    status: status == "true" ? true : false,
    publishDate: new Date(publishDate)
  });

  const eventUrl = `${process.env.CLIENT_URL}/api/window?userId=${eventInfo._id}`;

  try {
    const newEvent = await eventInfo.save();
    res.status(200).json({ success: true, data: newEvent, link: eventUrl });
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
  //   const {
  //     _id,
  //     userId,
  //     description,
  //     email,
  //     images,
  //     address,
  //     organizerName,
  //     status,
  //     publishDate
  //   } = req.body;
  //   try {
  //   } catch (error) {
  //     return next(error);
  //   }
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

  const filterQuery = {};

  if (search) filterQuery["$text"] = { $search: search };
  if (from && to)
    filterQuery["createdAt"] = { $gt: new Date(from), $lt: new Date(to) };
  if (city) filterQuery["city"] = city;

  try {
    const events = await eventModel.find(filterQuery);
    const cityArr = await eventModel.distinct("city");
    res.status(200).json({ success: true, data: events, cityArr });
  } catch (error) {
    return next(error);
  }
};

module.exports = { addEvent, editEvent, getEvent, getEvents };
