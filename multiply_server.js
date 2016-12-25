var express = require('express');
var app = express();

var inc = require('./multiply.js');
app.use('/', inc);

start = function(){
  console.log("server up at 127.0.0.1:3003")
};

app.listen(3003, "127.0.0.1", 10, start); // port, host, limit, callback
