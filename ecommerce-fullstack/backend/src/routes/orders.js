const express = require('express');
const {
  createOrder,
  getOrderById,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
} = require('../controllers/orderController');
const { protect, admin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.use(protect);

router.route('/')
  .get(getMyOrders)
  .post(createOrder);

router.get('/:id', getOrderById);

router.route('/:id/deliver')
  .put(admin, updateOrderToDelivered);

router.get('/all', admin, getOrders);

module.exports = router;
