// src/services/userService.js
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/config');

// Register new user
const register = async ({ username, email, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('Email already in use');
  }

  const user = new User({ username, email, password });
  await user.save();
  return { username: user.username, email: user.email };
};

// Login user
const login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid email or password');
  }

  // Generate JWT
  const token = jwt.sign({ id: user._id, username: user.username }, config.jwtSecret, {
    expiresIn: '1d',
  });
  return token;
};

module.exports = { register, login };
