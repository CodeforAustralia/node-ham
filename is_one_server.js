var express = require('express');
var app = express();

var inc = require('./is_one.js');
app.use('/', inc);

start = function(){
  console.log("server up at 127.0.0.1:3004")
};

app.listen(3004, "127.0.0.1", 10, start); // port, host, limit, callback
