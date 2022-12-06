const eventModel = require("../model/eventModel.js");
const userModel = require("../model/userModel.js");
const CustomError = require("../utils/custonErrorHandler.js");

/******************************************************
 * @addEvent
 * @route http://localhost:8081/api/addEvent
 * @description create new event
 * @parameters
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

  try {
    const newEvent = await eventInfo.save();
    res.status(200).json({ success: true, data: newEvent });
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

const getEvent = async (req, res, next) => {
  const { search, from, to, page, limit, city } = req.query;
  const filterQuery = {};
  if (search) filterQuery["$text"] = { $search: search };
  if (from && to) filterQuery["createdAt"] = { $gt: from, $lt: to };
  if (city) filterQuery["city"] = city;
  try {
    const events = await eventModel.find(filterQuery);
    res.status(200).json({ success: false, data: events });
  } catch (error) {
    return next(error);
  }
};

module.exports = { addEvent, editEvent, getEvent };
