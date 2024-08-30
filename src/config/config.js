// src/config/config.js
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  dbUri: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
};
