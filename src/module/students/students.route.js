const express = require("express");
const {
  getStudentsAllClass,
  getStudentAttendance,
} = require("./students.controller");

const studentRouter = express.Router();

studentRouter.route("/allClasses").get(getStudentsAllClass);
studentRouter.route("/getAttendance").get(getStudentAttendance);

module.exports = studentRouter;
