const { default: mongoose, Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: [true, "Duplicate Email"],
  },
  userId: {
    type: String,
    required: true,
    unique: [true, "Duplicate UserId"],
  },
  password: {
    type: String,
    required: true,
    minLength: [6, "Password must 6 or more lengths"],
  },
  role: {
    type: String,
    enum: ["teacher", "student"],
    default: "student",
  },
});

const userModel = model("User", userSchema);

module.exports = userModel;
