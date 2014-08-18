var http        = require('http');

// hello world via browser
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Hello dunia");
}).listen(process.env.PORT);