const express = require("express");
const {
  createCourse,
  getCoursesTeacher,
  addStudentToCourse,
  deleteCoursesFromTeacher,
  getCoursesStudent,
  addStudentAttendance,
  getStudentAttendance,
  getStudentsAttendance,
} = require("./teacher.controller");

const teacherRouter = express.Router();

teacherRouter.route("/course").get().post(createCourse);

teacherRouter
  .route("/course/students/:courseId")
  .get(getCoursesStudent)
  .post(addStudentToCourse);

teacherRouter
  .route("/course/attendance")
  // .get("/:courseId/:date", getStudentsAttendance)
  .post(addStudentAttendance)
  .patch();
teacherRouter
  .route("/course/attendance/:courseId/:date")
  .get(getStudentsAttendance);
teacherRouter
  .route("/course/attendance/:studentId/:courseId/:date")
  .get(getStudentAttendance);
teacherRouter
  .route("/course/:teacher")
  .get(getCoursesTeacher)
  .delete(deleteCoursesFromTeacher);
module.exports = teacherRouter;
