const fs = require('fs').promises;
const path = require('path');
const { isValidFilename } = require('../utils/securityUtils');
const { getFileList } = require('../utils/fileUtils');

module.exports = {
  createFile: async (req, res, params) => {
    const filename = params.get('filename');
    
    if (!isValidFilename(filename)) {
      res.writeHead(400);
      return res.end('Invalid filename');
    }

    try {
      await fs.writeFile(path.join(process.cwd(), filename), '');
      res.writeHead(302, { 'Location': '/' });
      res.end();
    } catch (err) {
      res.writeHead(500);
      res.end('Error creating file');
    }
  },

  deleteFile: async (req, res, params) => {
    const filename = params.get('file');
    
    if (!isValidFilename(filename)) {
      res.writeHead(400);
      return res.end('Invalid filename');
    }

    try {
      await fs.unlink(path.join(process.cwd(), filename));
      res.writeHead(302, { 'Location': '/' });
      res.end();
    } catch (err) {
      res.writeHead(500);
      res.end('Error deleting file');
    }
  },

  renameFile: async (req, res, params) => {
    const oldname = params.get('oldname');
    const newname = params.get('newname');
    
    if (!isValidFilename(oldname) || !isValidFilename(newname)) {
      res.writeHead(400);
      return res.end('Invalid filename');
    }

    try {
      await fs.rename(
        path.join(process.cwd(), oldname),
        path.join(process.cwd(), newname)
      );
      res.writeHead(302, { 'Location': '/' });
      res.end();
    } catch (err) {
      res.writeHead(500);
      res.end('Error renaming file');
    }
  }
};