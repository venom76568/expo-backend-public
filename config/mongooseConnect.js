// config/mongooseConnect.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb://teamecell:6GWAgH1RorIgfmxP@ac-mxfrspt-shard-00-00.ilbj88u.mongodb.net:27017,ac-mxfrspt-shard-00-01.ilbj88u.mongodb.net:27017,ac-mxfrspt-shard-00-02.ilbj88u.mongodb.net:27017/?ssl=true&replicaSet=atlas-il0q58-shard-0&authSource=admin&retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
