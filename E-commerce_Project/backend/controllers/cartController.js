const User = require('../models/User');
const Product = require('../models/Product');

exports.getCart = async (req, res) => {
  const user = await User.findById(req.user.id).populate('cart.product');
  res.json(user.cart);
};

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const user = await User.findById(req.user.id);
  const cartItem = user.cart.find(item => item.product.toString() === productId);
  if (cartItem) {
    cartItem.quantity += quantity || 1;
  } else {
    user.cart.push({ product: productId, quantity: quantity || 1 });
  }
  await user.save();
  res.json(user.cart);
};

exports.removeFromCart = async (req, res) => {
  const { productId } = req.body;
  const user = await User.findById(req.user.id);
  user.cart = user.cart.filter(item => item.product.toString() !== productId);
  await user.save();
  res.json(user.cart);
};

exports.updateCartItem = async (req, res) => {
  const { productId, quantity } = req.body;
  const user = await User.findById(req.user.id);
  const cartItem = user.cart.find(item => item.product.toString() === productId);
  if (cartItem) cartItem.quantity = quantity;
  await user.save();
  res.json(user.cart);
};
