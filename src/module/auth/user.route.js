const express = require("express");
const { createUser, getUser, getAllUser } = require("./user.controller");

const userRouter = express.Router();

userRouter.post("/register", createUser);
userRouter.post("/login", getUser);
userRouter.get("/allUser", getAllUser);

module.exports = userRouter;
