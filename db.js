// db.js
const mongoose = require('mongoose');
require('dotenv').config();  // Load .env variables

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);  // Exit process if connection fails
  }
};

module.exports = connectDB;  // Export the connection function
