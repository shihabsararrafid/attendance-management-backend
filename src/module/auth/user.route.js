const express = require("express");
const { createUser } = require("./user.controller");

const userRouter = express.Router();

userRouter.post("/register", createUser);

module.exports = userRouter;
