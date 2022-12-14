const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema(
  {
    userId: { type: String, required: true },
    title: {
      type: String,
      required: [true, "Title is Required"],
      maxLength: [125, "Maximim lenght is 125"]
    },
    description: {
      type: String,
      required: [true, "Description is Required"],
      maxLength: [250, "Maximum lenght is 250"]
    },
    email: { type: String, required: [true, "Email is Required"] },
    phone: { type: Number, required: [true, "Phone number is Required"] },
    address: { type: String, required: [true, "Address is Required"] },
    city: { type: String, required: [true, "City is Required"] },
    organizerName: {
      type: String,
      required: [true, "OrginazerName is Require"]
    },
    images: {
      imageOne: {
        url: { type: String },
        imageId: { type: String }
      },
      imageTwo: {
        url: { type: String },
        imageId: { type: String }
      },
      imageThree: {
        url: { type: String },
        imageId: { type: String }
      },
      imageFour: {
        url: { type: String },
        imageId: { type: String }
      }
    },
    status: {
      type: Boolean,
      required: [true, "Status is Require"],
      default: false
    },
    publishDate: {
      type: Date,
      required: [true, "Publish Date and Time is Required"]
    },
    likes: { type: Array }
  },
  { timestamps: true }
);

eventSchema.index({ title: "text" });
const eventModel = mongoose.model("event", eventSchema);
module.exports = eventModel;
