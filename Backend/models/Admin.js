const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true } // Production: Password hashing recommended
});

module.exports = mongoose.model('Admin', AdminSchema);
