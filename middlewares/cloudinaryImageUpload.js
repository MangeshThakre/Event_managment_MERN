const CustomError = require("../utils/custonErrorHandler");
const cloudinary = require("../config/cloudinary.config.js");

const clouninaryImageUpload = async (req, res, next) => {
  const files = req.files;
  if (!files)
    return next(new CustomError("At least one image is required", 400));

  if (Object.keys(files).length > 4) {
    return next(new CustomError("Can not upload more then four image"));
  }

  try {
    const images = [];
    for (const image in files) {
      const result = await cloudinary.uploader.upload(
        files[image].tempFilePath
      );
      images.push({ url: result.secure_url, imageId: result.public_id });
    }
    req.user["images"] = images;
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = clouninaryImageUpload;
