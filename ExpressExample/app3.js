var express = require('express')
var http = require('http')

var app = express()

app.set('port', process.env.PORT || 1337)

app.use(function(req, res, next) {
  console.log('첫번째 미들웨어 호출됨.')

  req.user = 'mike'

  next()
})

app.use(function(req, res, next) {
  console.log("두번째 미들웨어 호출됨.")
  res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"})
  res.end("<h1>서버의 응답: " + req.user + "</h1>")
})

var server = http.createServer(app).listen(app.get('port'),function() {
  console.log('Express로 웹 서버 실행됨.: ' + app.get('port'))
})
