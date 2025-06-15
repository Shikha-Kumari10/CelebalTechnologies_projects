const http = require('http');
const path = require('path');
const fs = require('fs').promises;

const server = {
  start: (route) => {
    const port = 3000;
    const server = http.createServer(async (req, res) => {
      try {
        // Serve static files
        if (req.url.startsWith('/public/')) {
          const filePath = path.join(__dirname, req.url);
          const data = await fs.readFile(filePath);
          const ext = path.extname(filePath).slice(1);
          const contentType = {
            css: 'text/css',
            js: 'application/javascript'
          }[ext] || 'text/plain';
          
          res.writeHead(200, { 'Content-Type': contentType });
          return res.end(data);
        }

        // Routing dynamic requests
        await route(req, res);
      } catch (err) {
        console.error(err);
        res.writeHead(500);
        res.end('Server Error');
      }
    });

    server.listen(port, () => {
      console.log(`File Manager running on http://localhost:${port}`);
    });
  }
};

module.exports = server;