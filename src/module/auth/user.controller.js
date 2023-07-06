const { createUserService } = require("./user.service");

module.exports.createUser = async (req, res, next) => {
  try {
    const user = await createUserService(req.body);
    res.status(200).json({
      status: "Success",
      message: "User Created",
      books: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};
