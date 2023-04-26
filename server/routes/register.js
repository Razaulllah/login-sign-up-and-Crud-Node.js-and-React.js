const express = require('express');
const app = express.Router();

const User = require("../models/user");

app.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.send({ message: 'Email already registered' });
    }

    // Create new user
    const newUser = new User({ name, email, password});
    await newUser.save();

    res.send({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.send({ message: 'Server error' });
  }
});


module.exports = app;