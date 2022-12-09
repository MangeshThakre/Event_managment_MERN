const CustomError = require("../utils/custonErrorHandler");
const cloudinary = require("../config/cloudinary.config.js");

const cloudinaryImageUpload = async (req, res, next) => {
  const isEdit = req.method === "PATCH" ? true : false;
  const files = req.files;
  if (!isEdit) {
    if (!files)
      return next(new CustomError("At least one image is required", 400));
    if (Object.keys(files).length > 4) {
      return next(new CustomError("Can not upload more then four image"));
    }
  }
  let images = {
    imageOne: { url: "", imageId: "" },
    imageTwo: { url: "", imageId: "" },
    imageThree: { url: "", imageId: "" },
    imageFour: { url: "", imageId: "" }
  };
  if (isEdit) images = JSON.parse(req.body.images);

  try {
    for (const image in files) {
      const result = await cloudinary.uploader.upload(
        files[image].tempFilePath
      );
      images[image] = { url: result.secure_url, imageId: result.public_id };
    }
    req.user["images"] = images;
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = cloudinaryImageUpload;
