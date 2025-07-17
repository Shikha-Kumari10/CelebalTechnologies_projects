const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String,
  inStock: Number,
});

module.exports = mongoose.model('Product', productSchema);
