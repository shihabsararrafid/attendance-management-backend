const { ObjectId } = require("mongodb");
const Course = require("./Models/course.model");

module.exports.createCourseService = async (data) => {
  //const { userId, password } = data;
  const course = new Course(data);
  await course.save();
  return course;
};

module.exports.getCoursesByTeacherService = async (data) => {
  //const { userId, password } = data;
  const course = await Course.find({ teacher: new ObjectId(data) });

  return course;
};
