var express = require('express')
var http = require('http')

var app = express()

app.set('port', process.env.PORT || 1337)

app.use(function(req, res, next) {
  console.log("첫번째 미들웨어 실행됨")

  req.user = 'mike'

  next();
})

app.use(function(req, res, next) {
  console.log("두번째 미들웨어 실행됨")

  //res.send("<h1>서버의 응답: " + req.user + "</h1>")

  var person = {name:"alpha", age:20}
  //res.send(person)

  var personStr = JSON.stringify(person)
  //res.send(personStr)

  res.writeHead(200, {"Content-Type":"appliation/json;charset=utf-8"})
  res.write(personStr)
  res.end()
})

var server = http.createServer(app).listen(app.get('port'), function() {
  console.log("Express로 웹 서버 실행됨.: " + app.get('port'))
})
