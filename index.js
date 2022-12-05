require("dotenv").config();
const app = require("./app.js");

const PORT = process.env.PORT;

const server = app.listen(PORT, () =>
  console.log(`server listning  at http://localhost:${PORT}`)
);
