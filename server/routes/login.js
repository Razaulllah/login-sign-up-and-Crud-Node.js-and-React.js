const express = require('express');
const app = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');

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

        // Generate JWT token
        const token = jwt.sign({ email: user.email }, 'secretkey');

        res.send({ message: 'Login successful', token });
    } catch (error) {
        res.send({ message: 'Server error' });
    }
});

module.exports = app;