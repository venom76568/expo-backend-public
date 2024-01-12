// routes/register.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  try {
    const { name, email ,startUpSector,headquarter,linkedin,discription} = req.body;

    // Validate inputs (add more validation as needed)
    if (!name  || !email) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already exists, try another email' });
    }

    // Create a new user
    const newUser = new User({ name, email ,startUpSector,headquarter,linkedin,discription});

    // Save the user to the database
    await newUser.save();

    res.json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
