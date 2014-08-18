var http        = require('http');

var headerContent = {
  'Content-Type' : 'text/plain',
  'haha' : 'test'
};

// console.log(headerContent['Content-Type']);

function onHttpRequest(a, b) {
    b.writeHead(200, headerContent);
    b.write("Test tulis ke browser\");
    b.end("Hello dunia");
}

var server = http.createServer(onHttpRequest);
server.listen(process.env.PORT);

// hello world via browser
/*
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Hello dunia");
}).listen(process.env.PORT);
*/