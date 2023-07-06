const express = require("express");
const { createUser, getUser } = require("./user.controller");

const userRouter = express.Router();

userRouter.post("/register", createUser);
userRouter.post("/login", getUser);

module.exports = userRouter;
