const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema(
  {
    title: {
      type: "string",
      require: [true, "Title is Required"],
      maxLength: [125, "Maximim lenght is 125"],
    },
    description: {
      tupe: "sting",
      require: [true, "Dexcription is Required"],
      maxLength: [250, "Maximum lenght is 250"],
    },
    email: { type: String, require: [true, "Email is Required"] },
    address: { type: String, require: [true, "Address is Required"] },
    organizerName: {
      type: String,
      require: [true, "OrginazerName is Require"],
    },
    image: [
      new Schema({
        url: { type: String, require: [true, "image is Require"] },
      }),
    ],
    status: {
      type: Boolean,
      require: [true, "Status is Require"],
      default: false,
    },
    publishDate: {
      type: Date,
      require: [true, "Publish Date and Time is Required"],
    },
  },
  { timeStaps: true }
);

const eventModel = mongoose.model("event", eventSchema);
module.exports = eventModel;
