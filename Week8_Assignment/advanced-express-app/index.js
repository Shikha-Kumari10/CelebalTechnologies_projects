const express = require('express');
const dotenv = require('dotenv');
const uploadRoutes = require('./routes/uploadRoutes');
const weatherRoutes = require('./routes/weatherRoutes');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use('/uploads', express.static('uploads')); // to serve static uploaded files

// Routes
app.use('/api/upload', uploadRoutes);
app.use('/api/weather', weatherRoutes);

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
