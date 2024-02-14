const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
  name: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = songSchema;