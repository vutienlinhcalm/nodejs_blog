const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type : String, max:255},
    description: {type: String, max:600},
    image: {type : String, max:255},
    CreatedAt: { type: Date,default: Date.now},
    UpdatedAt: { type: Date,default: Date.now},
  });

  module.exports = mongoose.model('Course', Course);