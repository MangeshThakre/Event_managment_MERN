const dotenv = require("dotenv").config();

const config = {
  MONGODB_URL: process.env.MONGODB_URL,
};

export default config;
