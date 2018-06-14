var express = require('express');
var http = require('http');
var static = require('serve-static');
var path = require('path');


var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 1337);
app.use(static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  console.log("첫번째 미들웨어 실행됨");

  var userAgent = req.header('User-Agent');
  var paramID = req.body.id || req.query.id;

  res.send("<h3>서버에서의 응답: User-Agent: " + userAgent + "</h3><br><h3>Param Name: " + paramID + "</h3>");
})

var server = http.createServer(app).listen(app.get('port'), function() {
  console.log("Express로 웹 서버 실행됨.: " + app.get('port'));
});
