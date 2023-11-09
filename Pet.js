// models/Pet.js
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
  description: String,
  photos: [String],
});

module.exports = mongoose.model('Pet', petSchema);
