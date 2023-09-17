// controllers/usersController.js
const User = require('../models/User'); // Assuming you have a User model

// User Sign-Up
const signUp = async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    
    res.status(500).json({ error: 'An error occurred during sign-up' });
  }
};

// User Sign-In
const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    res.json({ message: 'Sign-in successful', user });
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).json({ error: 'An error occurred during sign-in' });
  }
};

module.exports = {
  signUp,
  signIn,
};
