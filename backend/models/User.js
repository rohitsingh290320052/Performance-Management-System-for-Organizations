const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: { type: String, enum: ['admin', 'employee'], required: true },
  company: { type: String },
  branch: { type: String },
});

module.exports = mongoose.model('User', userSchema);
