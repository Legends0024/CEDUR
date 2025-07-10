import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();



router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
    const contact = new Contact({ name, email, message });
    await contact.save();
    return res.status(201).json({ message: 'Message received!', contact });
  } catch (err) {
    console.error('Contact form error:', err);
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: err.message });
    }
    return res.status(500).json({ message: 'Server error.' });
  }
});

export default router;
