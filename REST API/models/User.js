const mongoose = require('mongoose');

// The User schema with name, email, and age fields
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
});

// Export the User model for use in the routes
module.exports = mongoose.model('User', UserSchema);
