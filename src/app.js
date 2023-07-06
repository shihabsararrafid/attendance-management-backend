const express = require("express");
const cors = require("cors");
const userRouter = require("./module/auth/user.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/auth", userRouter);
module.exports = app;
