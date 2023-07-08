const { Schema, default: mongoose, trusted } = require("mongoose");

const courseScehma = new Schema({
  code: {
    type: String,
    required: true,
  },
  batchName: {
    type: String,
    required: true,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  //   students: [
  //     {
  //       user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  //       enrolledAt: { type: Date, default: Date.now },
  //     },
  //   ],
});
courseScehma.index({ batchName: 1, teacher: 1, code: 1 }, { unique: true });
// Adding unique constraint for teacher and batchName
const Course = mongoose.model("Course", courseScehma);
module.exports = Course;
