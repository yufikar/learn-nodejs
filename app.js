var http        = require('http');

// hello world via browser
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Hello World");
}).listen(process.env.PORT);