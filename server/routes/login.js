const express = require('express');
const app = express.Router();
const User = require('../models/user');

app.post('/', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.send({ message: 'Invalid email or password' });
      }
  
      // Check if password is correct
      if (user.password !== password) {
        return res.send({ message: 'Invalid email or password' });
      }
  
      res.send({ message: 'Login successful' });
    } catch (error) {
      res.send({ message: 'Server error' });
    }
  });

module.exports = app;