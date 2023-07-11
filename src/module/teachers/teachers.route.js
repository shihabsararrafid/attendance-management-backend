const express = require("express");
const {
  createCourse,
  getCoursesTeacher,
  addStudentToCourse,
} = require("./teacher.controller");

const teacherRouter = express.Router();

teacherRouter.route("/course").get().post(createCourse);
teacherRouter.route("/course/:teacher").get(getCoursesTeacher);
teacherRouter.route("/student").get().post(addStudentToCourse);
module.exports = teacherRouter;
