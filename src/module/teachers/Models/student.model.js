const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  userId: {
    type: String,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});
studentSchema.index(
  { user: 1, course: 1 },
  { unique: true, partialFilterExpression: { user: { $exists: true } } }
);
studentSchema.index(
  { userId: 1, course: 1 },
  { unique: true, partialFilterExpression: { userId: { $exists: true } } }
);
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
