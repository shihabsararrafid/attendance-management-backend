const {
  getCoursesByTeacherService,
  addStudentToCourseService,
  createClassService,
  deleteCoursesFromTeacher,
  deleteCoursesFromTeacherService,
  getCoursesStudentsService,
  addStudentAttendanceService,
} = require("./teacher.service");

module.exports.createCourse = async (req, res, next) => {
  try {
    const course = await createClassService(req.body);
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
module.exports.getCoursesStudent = async (req, res, next) => {
  try {
    const { courseId } = req.params;
    const courses = await getCoursesStudentsService(courseId);
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
module.exports.deleteCoursesFromTeacher = async (req, res, next) => {
  try {
    const { teacher } = req.params;
    const { courseId } = req.body;
    const courses = await deleteCoursesFromTeacherService(teacher, courseId);
    res.status(200).json({
      status: "Success",
      message: "Successfully Deleted The data",
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};
module.exports.addStudentToCourse = async (req, res, next) => {
  try {
    const student = await addStudentToCourseService(req.body);
    res.status(200).json({
      status: "Success",
      message: "User Created",
      student: student,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};

module.exports.addStudentAttendance = async (req, res, next) => {
  try {
    const attendance = await addStudentAttendanceService(req.body);
    res.status(200).json({
      status: "Success",
      message: "Attendance Successfully Saved",
      attendance: attendance,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};
