const { ObjectId } = require("mongodb");
const Course = require("./Models/class.model");
const Student = require("./Models/student.model");
const userModel = require("../auth/user.model");

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
