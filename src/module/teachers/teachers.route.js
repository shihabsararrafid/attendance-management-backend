const express = require("express");
const { createCourse, getCoursesTeacher } = require("./teacher.controller");

const teacherRouter = express.Router();

teacherRouter.route("/course").get().post(createCourse);
teacherRouter.route("/course/:teacher").get(getCoursesTeacher);

module.exports = teacherRouter;
