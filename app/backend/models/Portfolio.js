const mongoose = require('mongoose');

//Two ways to instantiate:
//1. Commented
//const Schema = mongoose.Schema;
//2. Follow Block:
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