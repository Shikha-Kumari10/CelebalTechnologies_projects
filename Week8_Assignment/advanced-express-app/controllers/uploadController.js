const handleFileUpload = (req, res, next) => {
  if (!req.file) {
    const err = new Error('No file uploaded');
    err.status = 400;
    return next(err);
  }

  res.status(200).json({
    message: 'File uploaded successfully!',
    file: req.file
  });
};

module.exports = { handleFileUpload };
