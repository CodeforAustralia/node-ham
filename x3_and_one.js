var request = require('request')
var http = require('http');
var express = require('express');
var router = express.Router();
var app = express();

start = function(){
  console.log("server up at 127.0.0.1:3030")
};
app.listen(3030, "127.0.0.1", 10, start);

//opts1 = {
//  method: "GET",
//  url: 'http://127.0.0.1:3003/multiply/6',
//  port: "3003"
//};
//req1 = request(opts1, function (error, response, body) {
//    if (!error && response.statusCode == 200) {
//        console.log("REQ:"+body);
//    } else {
//        console.log("ERR:"+error);
//    }
//});

var level_one = function(req, res){
  x3_opts = {
    method: "GET",
    url: 'http://127.0.0.1:3003/multiply/'+req.params.n,
    port: "3003"
  };
  request(x3_opts, function (error, response, x3_body) {
    if (!error && response.statusCode == 200) {
      i1_opts = {
        method: "GET",
        url: 'http://127.0.0.1:3001/increment/'+x3_body,
        port: "3001"
      };
      request(i1_opts, function (error, response, i1_body) {
          if (!error && response.statusCode == 200) {
              res.send("L2-inner");
          } else {
              res.send(i1_body);
              //console.log("REQ2:"+i1_body);
              //console.log("ERR2:"+error);
          }
      });
    } else {
        console.log("ERR1:"+error);
    }
  });
};
route = router.get('/x3_and_one/:n/', level_one);

app.use('/', route).on("error", function(e){
  console.log("Got route error: " + e.message);
});
