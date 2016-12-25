var express = require('express');
var app = express();

var inc = require('./increment.js');
app.use('/', inc);

start = function(){
  console.log("server up at 127.0.0.1:3001")
};

app.listen(3001, "127.0.0.1", 10, start); // port, host, limit, callback
