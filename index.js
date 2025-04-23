// index.js
const express = require('express');
const connectDB = require('./db');  // Import the database connection
const User = require('./models/User');  // Import the User model

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Create a new user and save it to the database
const createUser = async () => {
  const user = new User({
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
  });

  try {
    const savedUser = await user.save();
    console.log('User saved:', savedUser);
  } catch (err) {
    console.error('Error saving user:', err);
  }
};

// Fetch all users from the database
const getUsers = async () => {
  try {
    const users = await User.find();
    console.log('All users:', users);
  } catch (err) {
    console.error('Error fetching users:', err);
  }
};

// Run the functions to create and fetch users
createUser();
getUsers();

// Set up the server to listen on a specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
