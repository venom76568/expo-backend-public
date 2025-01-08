// server.js
const express = require("express");
const connectDB = require("./config/mongooseConnect");
const registerRoutes = require("./routes/register");
require("dotenv").config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000; // Use environment variable or default to 5000

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
connectDB();

// Register routes
app.use("/api/register", registerRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
