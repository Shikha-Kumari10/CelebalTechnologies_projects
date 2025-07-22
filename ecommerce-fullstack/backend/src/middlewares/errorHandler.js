module.exports = (err, req, res, next) => {
  console.error(err.stack);

  // If the status code was never set, default to 500
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode).json({
    message: err.message,
    
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  });
};