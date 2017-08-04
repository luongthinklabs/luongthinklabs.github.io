var http = require('http');
var file = require('fs');
var port = process.env.PORT || 8080;
http.createServer(function (req, res) {
  file.readFile('index.html',function(err,data){
  	res.writeHead(200, {'Content-Type': 'text/html'});
  	console.log(data);
    res.write(data);
    res.end();
  });
}).listen(port);