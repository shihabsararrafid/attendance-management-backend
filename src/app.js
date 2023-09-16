const express = require("express");
const cors = require("cors");
const userRouter = require("./module/auth/user.route");
const teacherRouter = require("./module/teachers/teachers.route");
const studentRouter = require("./module/students/students.route");

const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/teacher", teacherRouter);
app.use("/api/v1/student", studentRouter);
module.exports = app;
