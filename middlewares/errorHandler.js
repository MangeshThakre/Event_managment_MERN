function errorHandler(err, req, res, next) {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internet server error";

  res.status(err.statusCode).json({ success: false, error: err.message });
}

module.exports = errorHandler;
