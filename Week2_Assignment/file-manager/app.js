const server = require('./server');
const router = require('./router');

// Start the server
server.start(router.route);