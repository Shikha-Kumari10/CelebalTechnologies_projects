const express = require('express');
const router = express.Router();
const { getAllProducts, getProduct, addProduct, updateProduct, deleteProduct, searchProducts } = require('../controllers/productController');
const auth = require('../middleware/authMiddleware');

router.get('/', getAllProducts);
router.get('/search', searchProducts);
router.get('/:id', getProduct);
router.post('/', auth, addProduct);           // only for admin ideally
router.put('/:id', auth, updateProduct);      // only for admin ideally
router.delete('/:id', auth, deleteProduct);   // only for admin ideally

module.exports = router;
