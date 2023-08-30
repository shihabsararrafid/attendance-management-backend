const userModel = require("./user.model");
const { Error } = require("mongoose");
module.exports.createUserService = async (data) => {
  try {
    // console.log(data);
    const user = new userModel(data);
    console.log(user);
    await user.save();
    return user;
  } catch (error) {
    if (error instanceof Error.ValidationError) {
      const uniqueErrors = Object.values(error.errors).filter(
        (err) => err.kind === "unique"
      );
      if (uniqueErrors.length > 0) {
        const duplicateFields = uniqueErrors.map((err) => err.path).join(", ");
        throw new Error(
          `Duplicate value(s) found for field(s): ${duplicateFields}`
        );
      }
    }
    throw error;
  }
};
module.exports.getUserService = async (data) => {
  const { userId, password } = data;
  const user = await userModel.findOne({ userId, password });
  return user;
};
module.exports.getAllUserService = async (data) => {
  // const { userId, password } = data;
  const user = await userModel.find({});
  return user;
};
