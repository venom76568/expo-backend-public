// server.js
const express = require('express');
require("dotenv").config();
const cors = require('cors');
const bodyParser = require('body-parser');
const registerRoute = require('./routes/register');
const mongooseConnect = require('./config/mongooseConnect');

const app = express();
const PORT = 5000;
// console.log(process.env.MONGO_URL)

// Enable CORS
app.use(cors());

// Middleware to parse JSON in request body
app.use(bodyParser.json());

// Connect to MongoDB
mongooseConnect();

// Routes
app.use('/api', registerRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
