
const Order = require('../models/Order');
const Cart = require('../models/Cart');
const { processPayment } = require('../services/paymentService');
const { sendOrderConfirmation } = require('../services/emailService');

// @desc    Create new order (with Stripe payment & email)
// @route   POST /api/v1/orders
// @access  Private
exports.createOrder = async (req, res, next) => {
  try {
    const {
      orderItems,
      shippingInfo,
      paymentMethod,
      paymentMethodId,      // Stripe PaymentMethod ID from client
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: 'No order items' });
    }

    // 1) Process payment if using Stripe
    let paymentResult = {};
    if (paymentMethod === 'stripe') {
      const amountInCents = Math.round(totalPrice * 100);
      const paymentIntent = await processPayment(
        amountInCents,
        'usd',
        paymentMethodId
      );
      paymentResult = {
        id: paymentIntent.id,
        status: paymentIntent.status,
        update_time: paymentIntent.created,    // timestamp
        email_address: req.user.email,
      };
    }

    // 2) Create the order record
    const order = await Order.create({
      user: req.user.id,
      orderItems,
      shippingInfo,
      paymentMethod,
      paymentResult,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      paidAt: Date.now(),
    });

    // 3) Clear user's cart
    await Cart.findOneAndDelete({ user: req.user.id });

    // 4) Send confirmation email
    const emailHtml = `
      <h1>Order Confirmation</h1>
      <p>Hi ${req.user.name},</p>
      <p>Thank you for your order <strong>#${order._id}</strong>.</p>
      <p>Total: <strong>$${totalPrice.toFixed(2)}</strong></p>
      <p>We’ll let you know when it ships.</p>
      <p>— E-Shop Team</p>
    `;
    await sendOrderConfirmation(
      req.user.email,
      `Your Order ${order._id} is Confirmed`,
      emailHtml
    );

    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};
