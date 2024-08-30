// src/app.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const config = require('./config/config');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(config.dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes);

module.exports = app;
