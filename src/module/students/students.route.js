const express = require("express");
const { getStudentsAllClass } = require("./students.controller");

const studentRouter = express.Router();

studentRouter.get("/student/allClasses", getStudentsAllClass);

module.exports = studentRouter;
