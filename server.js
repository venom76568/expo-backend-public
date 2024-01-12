// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const registerRoute = require('./routes/register');
const mongooseConnect = require('./config/mongooseConnect');

const app = express();
const PORT = 5000;

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
