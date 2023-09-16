const Class = require("../teachers/Models/class.model");

module.exports.getStudentsAllClassService = async (id) => {
  const classes = await Class.find({ "students.userId": id });
  return classes;
};
