const mongoose = require('mongoose');

//Two ways to instantiate:
//1.
//const Schema = mongoose.Schema;
//2.
const { Schema } = mongoose;

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
    default: Date.now()
  },
});

module.exports = mongoose.model('portfolio', portfolioSchema);