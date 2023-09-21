const {
  getStudentsAllClassService,
  getStudentAttendanceService,
} = require("./students.service");

module.exports.getStudentsAllClass = async (req, res, next) => {
  try {
    const { studentId } = req.query;
    const classes = await getStudentsAllClassService(studentId);
    // console.log(url);
    res.status(200).json({
      status: "Success",
      message: "All Class Loaded",
      classes: classes,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
  next();
};
module.exports.getStudentAttendance = async (req, res, next) => {
  try {
    const { studentId, courseId } = req.query;
    const [attendance, presentCount, totalClass] =
      await getStudentAttendanceService(studentId, courseId);
    // console.log(url);
    res.status(200).json({
      status: "Success",
      message: "All Class Loaded",
      attendance: attendance,
      presentCount,
      totalClass,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
  next();
};
