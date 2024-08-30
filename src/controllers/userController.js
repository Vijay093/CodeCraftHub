// src/controllers/userController.js
const userService = require('../services/userService');

// Register a new user
const registerUser = async (req, res) => {
  try {
    const user = await userService.register(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    const token = await userService.login(req.body);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser };
