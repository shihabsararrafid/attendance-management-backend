const { Schema, default: mongoose, trusted } = require("mongoose");

const classScehma = new Schema({
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
  students: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      userId: {
        type: String,
      },
    },
  ],
});
classScehma.index({ batchName: 1, teacher: 1, code: 1 }, { unique: true });

const Class = mongoose.model("class", classScehma);
module.exports = Class;
