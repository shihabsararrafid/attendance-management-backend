const Attendance = require("../teachers/Models/attendance.model");
const Class = require("../teachers/Models/class.model");

module.exports.getStudentsAllClassService = async (id) => {
  const classes = await Class.find(
    { "students.userId": id },
    { _id: 1, code: 1, section: 1, batchName: 1 }
  );
  // const classCode =
  return classes;
};
module.exports.getStudentAttendanceService = async (id, courseId) => {
  const attendance = await Attendance.find({
    studentId: id,
    courseId: courseId,
  }).sort({ date: "asc" });
  const res = attendance.sort((a, b) => {
    const dataA = new Date(a.date);
    const dataB = new Date(b.date);
    return dataA - dataB;
  });
  const presentCount = attendance.filter(
    (attend) => attend.attendanceStatus === "present"
  );
  const totalClass = attendance.length;
  console.log(res);
  return [res, presentCount.length, totalClass];
};
