const { createQrToken } = require("../../utils/jwtutils");
const {
  getCoursesByTeacherService,
  addStudentToCourseService,
  createClassService,
  deleteCoursesFromTeacher,
  deleteCoursesFromTeacherService,
  getCoursesStudentsService,
  addStudentAttendanceService,
  getStudentAttendanceService,
  getStudentsAttendanceService,
  getStudentsAttendanceReportService,
} = require("./teacher.service");
var QRCode = require("qrcode");
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
    console.log(teacher);
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
    console.log("hi");
    const attendance = await addStudentAttendanceService(req.body);
    res.status(200).json({
      status: "Success",
      message: "Attendance Successfully Saved",
      attendance: attendance,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};

module.exports.getStudentAttendance = async (req, res, next) => {
  try {
    const { studentId, courseId, date } = req.params;
    console.log(req.params);

    const attendance = await getStudentAttendanceService(
      courseId,
      studentId,
      date
    );
    res.status(200).json({
      status: "Success",
      message: "Attendance Successfully Loaded",
      attendance: attendance,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};
module.exports.getStudentsAttendance = async (req, res, next) => {
  try {
    const { courseId, date } = req.params;
    console.log("hi", req.params);

    const attendance = await getStudentsAttendanceService(
      courseId,

      date
    );
    res.status(200).json({
      status: "Success",
      message: "Attendance Successfully Loaded",
      attendance: attendance,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};
module.exports.getStudentsAttendanceReport = async (req, res, next) => {
  try {
    const { courseId } = req.query;
    console.log("hi", req.query);

    const attendance = await getStudentsAttendanceReportService(courseId);
    res.status(200).json({
      status: "Success",
      message: "Attendance Successfully Loaded",
      attendance: attendance,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};

module.exports.getStudentAttendanceQrCode = async (req, res, next) => {
  try {
    const { courseId, date, duration } = req.query;

    const token = await createQrToken({ courseId, date }, duration);
    console.log(token);
    QRCode.toDataURL(`${token}`, function (err, url) {
      if (url) {
        res.status(200).json({
          status: "Success",
          message: "Qr Code Generated",
          qrCode: url,
        });
      } else {
        console.log("ds", err);
      }
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};
