var express = require('express');
var app = express();

var div2 = require('./divide2_js.js');
app.use('/', div2);


start = function(){
  console.log("server up at 127.0.0.1:3000")
};

app.listen(3002, "127.0.0.1", 10, start); // port, host, limit, callback
