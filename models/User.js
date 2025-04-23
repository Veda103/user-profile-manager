// models/User.js
const mongoose = require('mongoose');

// Define the schema for a user
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  // Name is a required field
  },
  email: {
    type: String,
    required: true,  // Email is a required field
    unique: true,    // Ensure email is unique
  },
  age: {
    type: Number,
    required: true,  // Age is a required field
  },
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;  // Export the User model
