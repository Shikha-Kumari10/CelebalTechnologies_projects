const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * Process a payment via Stripe
 * @param {number} amount - Amount in smallest currency unit (e.g., cents)
 * @param {string} currency - Currency code (e.g., 'usd')
 * @param {string} paymentMethodId - Stripe PaymentMethod ID
 * @returns {Promise<Stripe.PaymentIntent>}
 */
exports.processPayment = async (amount, currency, paymentMethodId) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency,
    payment_method: paymentMethodId,
    confirm: true,
  });
  return paymentIntent;
};