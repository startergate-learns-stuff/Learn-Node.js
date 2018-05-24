var http = require('http');

var server = http.createServer();
var port = 1337;
var host = 'localhost';
server.listen(port, host, 50000, function() {
  console.log("웹서버가 실행되었습니다.: " + host + ":" + port);
});
