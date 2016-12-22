var express = require('express');
var app = express();

var pages = require('./response.js');
app.use('/', pages);

start = function(){
  console.log("server up at 127.0.0.1:3000")
};

app.listen(3000, "127.0.0.1", 10, start); // port, host, limit, callback
