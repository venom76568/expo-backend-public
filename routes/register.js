const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());
const router = express.Router();
const User = require("../models/User");

router.get("/all", async (req, res) => {
  try {
    const allData = await User.find({});
    res.json({ data: allData });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// pages/api/users.js

router.post("/register", async (req, res) => {
  try {
    const {
      name,
      phone,
      pname,
      email,
      startUpSector,
      headquarter,
      linkedin,
      discription,
    } = req.body;

    // Validate inputs (add more validation as needed)
    if (!name || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Email already exists, try another email" });
    }

    // Create a new user
    const newUser = new User({
      name,
      pname,
      phone,
      email,
      startUpSector,
      headquarter,
      linkedin,
      discription,
    });

    // Save the user to the database
    await newUser.save();

    res.json({ message: "Registration successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
