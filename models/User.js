// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  pname: String,
  email: String,
  startUpSector: String,
  headquarter: String,
  linkedin: String,
  discription: String,
  challan: String,
});

const User = mongoose.model("User", userSchema, "user1");

module.exports = User;
