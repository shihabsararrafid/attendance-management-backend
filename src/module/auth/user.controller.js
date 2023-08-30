const {
  createUserService,
  getUserService,
  getAllUserService,
} = require("./user.service");

module.exports.createUser = async (req, res, next) => {
  try {
    const user = await createUserService(req.body);
    res.status(200).json({
      status: "Success",
      message: "User Created",
      books: user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};
module.exports.getUser = async (req, res, next) => {
  try {
    console.log("hello");
    const user = await getUserService(req.body);
    if (user)
      res.status(200).json({
        status: "Success",
        message: "User Logged In",
        user: user,
      });
    else throw new Error("No user with this credentials");
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};
module.exports.getAllUser = async (req, res, next) => {
  try {
    const user = await getAllUserService();
    if (user)
      res.status(200).json({
        status: "Success",
        message: "User n",
        user: user,
      });
    else throw new Error("No user with this credentials");
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};
