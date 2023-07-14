const express = require("express");
const {
  createCourse,
  getCoursesTeacher,
  addStudentToCourse,
  deleteCoursesFromTeacher,
} = require("./teacher.controller");

const teacherRouter = express.Router();

teacherRouter.route("/course").get().post(createCourse);
teacherRouter
  .route("/course/:teacher")
  .get(getCoursesTeacher)
  .delete(deleteCoursesFromTeacher);
teacherRouter.route("/student").get().post(addStudentToCourse);
module.exports = teacherRouter;
