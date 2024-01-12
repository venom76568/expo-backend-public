// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  // phone: String,
  email: String,
  startUpSector:String,
  headquarter: String,
  linkedin: String,
  discription: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
