const Order = require('../models/Order');
const User = require('../models/User');

exports.placeOrder = async (req, res) => {
  const user = await User.findById(req.user.id).populate('cart.product');
  if (!user.cart.length) return res.status(400).json({ msg: 'Cart is empty' });

  const { address, paymentMethod } = req.body;
  const order = new Order({
    user: user._id,
    items: user.cart.map(item => ({
      product: item.product._id,
      quantity: item.quantity
    })),
    address,
    payment: { method: paymentMethod, status: 'Paid' }
  });
  await order.save();
  user.cart = [];
  await user.save();
  res.json({ msg: 'Order placed', order });
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).populate('items.product');
  res.json(orders);
};
