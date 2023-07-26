const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const path = url.parse(req.url, true).pathname;

  if (path === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('¡Welcome to the HTTP server!');
  } else if (path === '/about') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is the about us page.');
  } else if (path === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Get in touch with us at contact@example.com');
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

