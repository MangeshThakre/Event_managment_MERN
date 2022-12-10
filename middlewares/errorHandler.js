function errorHandler(err, req, res, next) {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internet server error";

  if (err.name === "ValidationError") {
    err.statusCode = 400;
  }
  if (err.code == 11000) {
    err.message = `${Object.keys(err.keyValue)} should be unique`;
    err.statusCode = 400;
  }
  if (err.name === "CastError") {
    err.statusCode = 400;
    err.message = `Invalid Id`;
  }

  res.status(err.statusCode).json({ success: false, message: err.message });
}

module.exports = errorHandler;
