// server.js
const express = require("express");
const connectDB = require("./config/mongooseConnect");
const cors = require("cors");
const registerRoutes = require("./routes/register");
require("dotenv").config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000; // Use environment variable or default to 5000

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://expo.ecellvnit.org",
    "https://expo-regis-live.vercel.app",
  ], // Allow specific origins
  methods: ["GET", "POST", "OPTIONS"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  credentials: true, // Allow cookies and authorization headers
};

app.use(cors(corsOptions));
// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
connectDB();

// Register routes
app.use(registerRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
