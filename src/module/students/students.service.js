const Class = require("../teachers/Models/class.model");

module.exports.getStudentsAllClassService = async (id) => {
  const classes = await Class.find(
    { "students.userId": id },
    { _id: 1, code: 1 }
  );
  // const classCode =
  return classes;
};
