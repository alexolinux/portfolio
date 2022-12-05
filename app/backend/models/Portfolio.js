//Portfolio Entity
const mongoose = require('mongoose');

//Two options to do the same thing: 
//const Schema = mongoose.Schema;   //<= Option 01
const { Schema } = mongoose;        //<= Option 02

//Object portfolioSchema:
const portfolioSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('portfolio', portfolioSchema);