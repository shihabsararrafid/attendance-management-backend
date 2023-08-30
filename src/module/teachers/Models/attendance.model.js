const { Schema, model } = require("mongoose");

const AttendanceSchema = new Schema({
  studentId: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  attendanceStatus: {
    type: String,
    enum: ["present", "absent", "late"],
    required: true,
  },
});
AttendanceSchema.index(
  { studentId: 1, courseId: 1, date: 1 },
  { unique: true }
);
const Attendance = model("Attendance", AttendanceSchema);

module.exports = Attendance;
