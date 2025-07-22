const express = require('express');
const { getCart, addToCart, removeFromCart } = require('../controllers/cartController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.use(protect);
router.get('/', getCart);
router.post('/', addToCart);
router.delete('/:productId', removeFromCart);

module.exports = router;