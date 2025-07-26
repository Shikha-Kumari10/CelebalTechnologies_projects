const express = require('express');
const multer = require('multer');
const { handleFileUpload } = require('../controllers/uploadController');

const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.post('/', upload.single('file'), handleFileUpload);

module.exports = router;
