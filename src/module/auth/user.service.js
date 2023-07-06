const userModel = require("./user.model");

module.exports.createUserService = async (data) => {
  const user = new userModel(data);
  user.save();
  return user;
};
