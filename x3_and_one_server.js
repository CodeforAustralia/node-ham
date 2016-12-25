var express = require('express');
var app = express();

var inc = require('./x3_and_one.js');
app.use('/', inc);


start = function(){
  console.log("server up at 127.0.0.1:3030")
};

app.listen(3030, "127.0.0.1", 10, start); // port, host, limit, callback
