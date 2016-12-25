// 
var http = require('http');
var express = require('express');
var router = express.Router();

router.get('/x3_and_one/:n/', function(req, res){

  var mult_opt = {
    host: 'localhost',
    port: 3003,
    path: 'http:/localhost/increment/'+req.params.n
  };

  http.get(mult_opt, function(resp){
    resp.on('data', function(chunk){
      console.log("mult 5 Got: " + chunk)
      var plus_opt = {
        host: 'localhost',
        port: 3001,
        path: '/multiply/' + chunk
      };
      http.get(plus_opt, function(resp){
        resp.on('data', function(chunk2){
          console.log("plus Got: " + chunk2)
          return chunk2
        });
      }).on("error", function(e){
        console.log("Got error: " + e.message);
      });
      return chunk
    });
  }).on("error", function(e){
    console.log("Got error: " + e.message);
  });
  res.send(parseInt() === 1);

});

module.exports = router;
