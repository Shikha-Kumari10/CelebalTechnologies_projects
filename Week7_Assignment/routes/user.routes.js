const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const verifyToken = require('../middleware/auth.middleware');

// Protected route to get user profile
router.get('/me', verifyToken, async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
});

module.exports = router;