var express = require('express')
var http = require('http')

var app = express()

app.set('port', process.env.PORT || 1337)

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express로 웹 서버 실행됨.: ' + app.get('port'))
})
