const mongoose = require("mongoose");

const MONGODB_URL = process.env.MONGODB_URL;
async function mongoDbconnection() {
  mongoose
    .connect(MONGODB_URL)
    .then(() => console.log(`connected to Db`))
    .catch((error) => {
      console.log(error);
    });
}

module.exports = mongoDbconnection;
