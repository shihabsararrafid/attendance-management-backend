const userModel = require("./user.model");

module.exports.createUserService = async (data) => {
  try {
    const user = new userModel(data);
    user.save();
    return user;
  } catch (error) {
    return error;
  }
};
module.exports.getUserService = async (data) => {
  const { userId, password } = data;
  const user = await userModel.findOne({ userId, password });
  return user;
};
