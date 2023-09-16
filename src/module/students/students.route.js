const express = require("express");
const { getStudentsAllClass } = require("./students.controller");

const studentRouter = express.Router();

studentRouter.route("/allClasses").get(getStudentsAllClass);

module.exports = studentRouter;
