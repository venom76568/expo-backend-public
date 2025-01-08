// config/mongooseConnect.js
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB with URL:", process.env.MONGO_URL); // Debugging
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
