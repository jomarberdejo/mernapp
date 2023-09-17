// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensures usernames are unique
  },
  password: {
    type: String,
    required: true,
  },
  // Add more fields as needed (e.g., name, email, etc.)
});

const User = mongoose.model('User', userSchema);

module.exports = User;
