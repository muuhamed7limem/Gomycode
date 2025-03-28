const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a product name'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price'],
    maxlength: [8, 'Price cannot be more than 8 characters']
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: [
      'Electronics',
      'Cameras',
      'Laptops',
      'Accessories',
      'Headphones',
      'Food',
      'Books',
      'Clothes/Shoes',
      'Beauty/Health',
      'Sports',
      'Outdoor',
      'Home'
    ]
  },
  stock: {
    type: Number,
    required: [true, 'Please add a stock quantity'],
    maxlength: [4, 'Stock cannot be more than 4 characters']
  },
  ratings: {
    type: Number,
    default: 0
  },
  images: [
    {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', ProductSchema);