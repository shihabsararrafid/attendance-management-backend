const mongoose = require("mongoose");
const app = require("./app");
const port = 4001;

async function connectToDb() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/attendance-management");
    app.listen(port, () => {
      console.log("Connection to Db is successful");
    });
  } catch (error) {
    console.log(`Failed to connect to db and Error is ${error.message}`);
  }
}
connectToDb();
