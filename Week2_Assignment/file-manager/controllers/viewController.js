const fs = require('fs').promises;
const path = require('path');
const { isValidFilename } = require('../utils/securityUtils');
const { getFileList } = require('../utils/fileUtils');

module.exports = {
  showHome: async (req, res) => {
    try {
      const files = await getFileList();
      
      let html = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Simple File Manager</title>
          <link rel="stylesheet" href="/public/style.css">
        </head>
        <body>
          <div class="container">
            <h1>File Manager</h1>
            
            <form action="/create" method="POST" class="file-form">
              <input type="text" name="filename" placeholder="New filename" required>
              <button type="submit">Create</button>
            </form>
            
            <ul class="file-list">
              ${files.map(file => `
                <li>
                  <span>${file.name}</span>
                  <div class="actions">
                    <a href="/view?file=${encodeURIComponent(file.name)}" class="btn view">View</a>
                    <form action="/delete" method="POST">
                      <input type="hidden" name="file" value="${file.name}">
                      <button type="submit" class="btn delete">Delete</button>
                    </form>
                    <form action="/rename" method="POST" class="rename-form">
                      <input type="hidden" name="oldname" value="${file.name}">
                      <input type="text" name="newname" placeholder="New name" required>
                      <button type="submit" class="btn rename">Rename</button>
                    </form>
                  </div>
                </li>
              `).join('')}
            </ul>
          </div>
        </body>
        </html>
      `;

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    } catch (err) {
      res.writeHead(500);
      res.end('Error loading files');
    }
  },

  viewFile: async (req, res, filename) => {
    if (!filename || !isValidFilename(filename)) {
      res.writeHead(400);
      return res.end('Invalid filename');
    }

    try {
      const content = await fs.readFile(path.join(process.cwd(), filename), 'utf8');
      
      const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Viewing ${filename}</title>
          <link rel="stylesheet" href="/public/style.css">
        </head>
        <body>
          <div class="container">
            <h1>${filename}</h1>
            <a href="/" class="back-link"> Back to files</a>
            <pre class="file-content">${content}</pre>
          </div>
        </body>
        </html>
      `;

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    } catch (err) {
      res.writeHead(500);
      res.end('Error reading file');
    }
  }
};