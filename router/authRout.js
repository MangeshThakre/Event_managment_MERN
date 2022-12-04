const express = require("express");
const authRouter = express.Router();

authRouter.post("/user", createUser);

module.exports = authRouter;
