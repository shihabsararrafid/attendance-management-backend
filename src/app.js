const express = require("express");
const cors = require("cors");
const userRouter = require("./module/auth/user.route");
const teacherRouter = require("./module/teachers/teachers.route");

const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/teacher", teacherRouter);
module.exports = app;
