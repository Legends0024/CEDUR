import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// Register



router.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, password, companyName, numEmployees, companyPhone } = req.body;
    if (!firstName || !lastName || !email || !password) {
      res.status(400).json({ message: 'All fields are required.' });
      return;
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: 'Email already registered.' });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ firstName, lastName, email, password: hashedPassword, companyName, numEmployees, companyPhone });
    await user.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    console.error('Signup error:', err);
    if (err.name === 'ValidationError') {
      res.status(400).json({ message: err.message });
      return;
    }
    if (err.code === 11000) {
      res.status(400).json({ message: 'Email already registered.' });
      return;
    }
    res.status(500).json({ message: 'Server error.' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { firstName: user.firstName, lastName: user.lastName, email: user.email } });
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
});

export default router;
