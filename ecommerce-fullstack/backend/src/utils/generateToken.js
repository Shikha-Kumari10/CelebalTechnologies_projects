const jwt = require('jsonwebtoken');

/**
 * Creates a JWT, sets it as an HTTP‐only cookie on the response,
 * and returns nothing.
 *
 * @param {import('express').Response} res
 * @param {string} userId
 */
function generateToken(res, userId) {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });

  // Set cookie
  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // send over HTTPS only in prod
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
}

module.exports = generateToken;