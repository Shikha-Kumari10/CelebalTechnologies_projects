// backend/src/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter product name'],
  },
  description: {
    type: String,
    required: [true, 'Please enter product description'],
  },
  price: {
    type: Number,
    required: [true, 'Please enter product price'],
    max: [999999, 'Price cannot exceed 6 digits'],
  },
  category: {
    type: String,
    required: [true, 'Please select category'],
  },
  stock: {
    type: Number,
    required: [true, 'Please enter stock quantity'],
    max: [9999, 'Stock cannot exceed 4 digits'],
    default: 1,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      name: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
