const fileController = require('./controllers/fileController');
const viewController = require('./controllers/viewController');

const router = {
  route: async (req, res) => {
    const { method, url } = req;
    
    // Parse URL and query parameters
    const [path, queryString] = url.split('?');
    const query = new URLSearchParams(queryString);

    // Route GET requests
    if (method === 'GET') {
      switch (path) {
        case '/':
          return viewController.showHome(req, res);
        case '/view':
          return viewController.viewFile(req, res, query.get('file'));
        default:
          res.writeHead(404);
          return res.end('Not Found');
      }
    }
    
    if (method === 'POST') {
      let body = '';
      req.on('data', chunk => body += chunk.toString());
      req.on('end', () => {
        const params = new URLSearchParams(body);
        switch (path) {
          case '/create':
            return fileController.createFile(req, res, params);
          case '/delete':
            return fileController.deleteFile(req, res, params);
          case '/rename':
            return fileController.renameFile(req, res, params);
          default:
            res.writeHead(404);
            return res.end('Not Found');
        }
      });
    }
  }
};

module.exports = router;