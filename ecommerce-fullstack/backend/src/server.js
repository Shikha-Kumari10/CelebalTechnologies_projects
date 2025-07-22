require('dotenv').config();
const connectDB = require('../config/db');
const app = require('./app');

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Start Express server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
