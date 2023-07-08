const {
  createCourseService,
  getCoursesByTeacherService,
} = require("./teacher.service");

module.exports.createCourse = async (req, res, next) => {
  try {
    const course = await createCourseService(req.body);
    res.status(200).json({
      status: "Success",
      message: "User Created",
      courses: course,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};
module.exports.getCoursesTeacher = async (req, res, next) => {
  try {
    const { teacher } = req.params;
    const courses = await getCoursesByTeacherService(teacher);
    res.status(200).json({
      status: "Success",
      message: "Courses",
      courses: courses,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};
