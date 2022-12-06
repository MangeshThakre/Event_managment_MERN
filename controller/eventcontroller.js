const eventModel = require("../model/eventModel.js");

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
    address,
    organizerName,
    status: status == "true" ? true : false,
    publishDate: new Date(publishDate)
  });

  try {
    const newEvent = await eventInfo.save();
    res.status(200).json({ success: true, data: newEvent });
  } catch (error) {
    next(error);
  }
};

module.exports = { addEvent };
