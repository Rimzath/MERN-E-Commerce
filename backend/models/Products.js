const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productName: String,
  description: String,
  price: Number,
  quantity: Number,
});

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel;
