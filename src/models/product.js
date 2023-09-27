const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  ide: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  screen: {
    type: String,
    required: true
  },
  camera: {
    type: String,
    required: true
  },
  ram: {
    type: String,
    required: true
  },
  stock: {
    type: String,
    required: true
  }
},{
  tymestamps: true,
  versionKey: false
});

module.exports = mongoose.model('Product', productSchema);