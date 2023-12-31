const { ObjectId } = require("mongodb");
const Course = require("./Models/class.model");
const Student = require("./Models/student.model");
const userModel = require("../auth/user.model");
const Attendance = require("./Models/attendance.model");
const createHttpError = require("http-errors");

module.exports.createClassService = async (data) => {
  const { startRoll, numberOfStudents, code, batchName, teacher, section } =
    data;
  const Roll = parseInt(startRoll);
  var students = [];
  const studentsCount = parseInt(numberOfStudents);
  console.log(Roll, studentsCount);
  for (let i = Roll; i < Roll + studentsCount; i++) {
    console.log(i);
    const user = await userModel.findOne({ userId: i });
    let obj;
    if (user) {
      obj = { userId: i, user: user._id };
    } else obj = { userId: i };
    students.push(obj);
    console.log(obj);
  }
  const course = new Course({ code, batchName, teacher, students, section });
  await course.save();
  return course;
  return students;
};

module.exports.getClassServiceByTeacher = async (data) => {
  const course = await Course.find(
    { teacher: new ObjectId(data) },
    { code: 1, batchName: 1, section: 1 }
  );
  return course;
};

module.exports.getCoursesByTeacherService = async (data) => {
  const course = await Course.find(
    { teacher: new ObjectId(data) },
    { code: 1, batchName: 1, section: 1 }
  );
  return course;
};
module.exports.getCoursesStudentsService = async (data) => {
  const students = await Course.find({ _id: new ObjectId(data) });
  return students;
};
//getCoursesStudentsService;
module.exports.deleteCoursesFromTeacherService = async (
  teacherId,
  courseId
) => {
  const course = await Course.findOneAndDelete(
    {
      teacher: new ObjectId(teacherId),
      _id: new ObjectId(courseId),
    },
    { code: 1, batchName: 1, section: 1 }
  );
  return course;
};
module.exports.addStudentToCourseService = async (data) => {
  const { user, courses } = data;
  const findStudent = await Student.find({ user: user });
  if (findStudent.length) {
    findStudent[0].courses.push(...courses);
    // findStudent.save();
    //   const student = new Student({user,findStudent[0].courses})
    console.log(findStudent);
    return findStudent;
  } else {
    const student = new Student(data);
    await student.save();
    return student;
  }
};

module.exports.addStudentAttendanceService = async (data) => {
  const attendanceFind = await Attendance.find({
    courseId: data[0].courseId,
    date: data[0].date,
  });

  if (attendanceFind) {
    const attendance = await Attendance.deleteMany({
      courseId: data[0].courseId,
      date: data[0].date,
    });
  }
  const attendance = await Attendance.insertMany(data);

  // await attendance.save();
  return attendance;
};

module.exports.getStudentAttendanceService = async (
  courseId,
  studentId,
  date
) => {
  console.log(courseId, studentId, date);
  const attendance = await Attendance.find({
    studentId: studentId,
    courseId,
    date,
  });
  return attendance;
};
module.exports.getStudentsAttendanceService = async (
  courseId,

  date
) => {
  // console.log(courseId, studentId, date);
  const attendance = await Attendance.find({
    courseId,
    date,
  });
  return attendance;
};
module.exports.getStudentsAttendanceReportService = async (courseId) => {
  const students = await Attendance.aggregate([
    {
      $match: { courseId: courseId },
    },
    {
      $group: {
        _id: "$studentId",
        total: { $sum: 1 },
        presentCount: {
          $sum: {
            $cond: [{ $eq: ["$attendanceStatus", "present"] }, 1, 0],
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        studentId: "$_id",
        attendancePercentage: {
          $multiply: [{ $divide: ["$presentCount", "$total"] }, 100],
        },
        totalClass: "$total",
      },
    },
    {
      $sort: { studentId: 1 },
    },
  ]);
  return students;
};

module.exports.saveStudentsAttendanceByQrCodeService = async (
  payload,
  studentId
) => {
  const { courseId, date } = payload;
  const attendance = await Attendance.find({ courseId, date, studentId });
  if (!attendance.length) {
    const res = await Attendance.create({
      courseId,
      date,
      studentId,
      attendanceStatus: "present",
    });
    return res;
  } else {
    throw createHttpError(404, "Already your attendance saved");
  }
};
