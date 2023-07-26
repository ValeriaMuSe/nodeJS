var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname;
  switch (path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('Welcome to the HTTP server!');
      res.end();
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('This is the about us page.');
      res.end();
      break;
    case '/contact':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('Contact us at contact@example.com');
      res.end();
      break;
    default:
      res.writeHead(404);
      res.write('Page not found');
      res.end();
      break;
    }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});


