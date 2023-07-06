const { default: mongoose, Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: [6, "Password must 6 or more lengths"],
  },
});

const userModel = model("User", userSchema);

module.exports = userModel;
