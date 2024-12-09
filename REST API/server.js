// Import required modules
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

// Import User model
const User = require('./models/User');

// Initialize Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.error('MongoDB connection failed:', err));

// Define the server port
const PORT = process.env.PORT || 5000;

// Routes

// GET: Fetch all users from the database
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST: Add a new user to the database
app.post('/users', async (req, res) => {
    const { name, email, age } = req.body;
    try {
        const newUser = new User({ name, email, age });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT: Edit a user by ID
app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name, email, age },
            { new: true, runValidators: true }
        );
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE: Remove a user by ID
app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
