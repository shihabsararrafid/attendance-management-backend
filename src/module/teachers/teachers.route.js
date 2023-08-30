const express = require("express");
const {
  createCourse,
  getCoursesTeacher,
  addStudentToCourse,
  deleteCoursesFromTeacher,
  getCoursesStudent,
  addStudentAttendance,
} = require("./teacher.controller");

const teacherRouter = express.Router();

teacherRouter.route("/course").get().post(createCourse);

teacherRouter
  .route("/course/students/:courseId")
  .get(getCoursesStudent)
  .post(addStudentToCourse);

teacherRouter
  .route("/course/attendance")
  .get()
  .post(addStudentAttendance)
  .patch();
teacherRouter
  .route("/course/:teacher")
  .get(getCoursesTeacher)
  .delete(deleteCoursesFromTeacher);
module.exports = teacherRouter;
