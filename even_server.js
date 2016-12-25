var express = require('express');
var app = express();

var inc = require('./even.js');
app.use('/', inc);

start = function(){
  console.log("server up at 127.0.0.1:3005")
};

app.listen(3005, "127.0.0.1", 10, start); // port, host, limit, callback
