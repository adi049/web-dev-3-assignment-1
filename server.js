const http = require('http');

const PORT = 3000;

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/plain');

  if (request.url === '/') {
    response.statusCode = 200;
    response.end('Welcome to Node Server');
  } else if (request.url === '/about') {
    response.statusCode = 200;
    response.end('About Page');
  } else if (request.url === '/contact') {
    response.statusCode = 200;
    response.end('Contact Page');
  } else {
    response.statusCode = 404;
    response.end('404 - Page Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('Available routes: /, /about, /contact');
});
